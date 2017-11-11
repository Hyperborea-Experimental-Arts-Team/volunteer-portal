import React from 'react';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';
import UserBadge from './UserBadge';
import { Table, Header, ExpandableRow } from './Table';

import style from './DepartmentSummary.less';
import theme from '../theme.css';

const TABLE_WIDTHS = [35, 15, 15, 15, 20];

function getStatusMessage({ minShifts, maxShifts, filledShifts }) {
  const needed = minShifts - filledShifts;
  const extra = maxShifts - filledShifts;
  if (needed > 0) {
    return <FormattedMessage
        id="status.needed"
        defaultMessage="{num} {num, plural, one {volunteer} other {volunteers}} needed"
        values={{ num: needed }} />;
  }
  if (extra > 0) {
    return <FormattedMessage
        id="status.extra"
        defaultMessage="{num} extra {num, plural, one {shift} other {shifts}} open"
        values={{ num: extra }} />;
  }
  return <FormattedMessage
      id="status.filled"
      defaultMessage="All shifts filled" />;
}

function getStatus({ minShifts, maxShifts, filledShifts }) {
  return (
    <span className={filledShifts < minShifts ? style.urgent : null}>
      {getStatusMessage({minShifts, maxShifts, filledShifts})}
    </span>
  );
}

function getFilledMessage(min, filled) {
  return <span className={filled < min ? style.urgent : null}>
      <FormattedMessage
        id="shift.filledDisplay"
        defaultMessage="{filled} / {min} min."
        values={{ filled, min }}
      />
    </span>;
}

function getRow(team, expanded, toggleTeam) {
  const totals = team.roles.reduce((role, totals) => ({
    minShifts: role.minShifts + totals.minShifts,
    maxShifts: role.maxShifts + totals.maxShifts,
    filledShifts: role.filledShifts + totals.filledShifts
  }), { minShifts: 0, maxShifts: 0, filledShifts: 0 });

  return <ExpandableRow
      key={team.name}
      toggle={toggleTeam.bind(null, team.name)}
      expanded={expanded}
      widths={TABLE_WIDTHS}
      data={[
        team.name,
        totals.minShifts,
        totals.maxShifts,
        getFilledMessage(totals.minShifts, totals.filledShifts),
        getStatus(totals)
      ]}
      subRows={team.roles.map(r => [
        r.name,
        r.minShifts,
        r.maxShifts,
        getFilledMessage(r.minShifts, r.filledShifts),
        getStatus(r)
      ])}
  />
}

export default ({ name, lead, teams, expandedRows = new Set(), toggleRow = () => {} }) => {
  return (
      <section className={concat(theme.bg_content, style.wrapper)}>
        <div className={style.header}>
          <div className={style.title}>
            <FormattedMessage
                id="department.needs"
                defaultMessage="{title} Department Volunteer Needs"
                values={{ title: name }}/>
          </div>
          <UserBadge {...lead} justify="right" title={
            <FormattedMessage
                id="lead.title"
                defaultMessage="{department} Lead"
                values={{ department: name }} />}
          />
        </div>
        <Table
          header={
            <Header widths={TABLE_WIDTHS} data={[
              <FormattedMessage id="team.name" defaultMessage="Team" />,
              <FormattedMessage id="team.minShifts" defaultMessage="Min. Shifts" />,
              <FormattedMessage id="team.maxShifts" defaultMessage="Max. Shifts" />,
              <FormattedMessage id="team.filledShifts" defaultMessage="Filled Shifts" />,
              <FormattedMessage id="team.status" defaultMessage="Status" />
            ]} />}
          rows={teams.map(t => getRow(t, expandedRows.has(t.name), toggleRow))}
        />
      </section>
  );
};