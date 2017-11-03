import React from 'react';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';
import UserBadge from './UserBadge';
import Table from './Table';

import style from './DepartmentSummary.less';
import theme from '../theme.css';

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

function getRowModel(team) {
  const totals = team.roles.reduce((role, totals) => ({
    minShifts: role.minShifts + totals.minShifts,
    maxShifts: role.maxShifts + totals.maxShifts,
    filledShifts: role.filledShifts + totals.filledShifts
  }), { minShifts: 0, maxShifts: 0, filledShifts: 0 });

  return [
    team.name,
    totals.minShifts,
    totals.maxShifts,
    <FormattedMessage
        id="shift.filledDisplay"
        defaultMessage="{filled} / {min} min."
        values={{
          filled: totals.filledShifts,
          min: totals.minShifts
        }} />,
    getStatusMessage(totals)
  ];
}

export default ({ name, lead, teams }) => (
  <section className={concat(theme.bg_content, style.wrapper)}>
    <div className={style.header}>
      <div className={style.title}>
        <FormattedMessage
            id="department.needs"
            defaultMessage="{title} Department Volunteer Needs"
            values={{ title: name }} />
      </div>
      <UserBadge {...lead} title={
        <FormattedMessage
            id="lead.title"
            defaultMessage="{department} Lead"
            values={{ department: name }} />}
      />
    </div>
    <Table
        headings={[
          <FormattedMessage id="team.name" defaultMessage="Team" />,
          <FormattedMessage id="team.minShifts" defaultMessage="Min. Shifts" />,
          <FormattedMessage id="team.maxShifts" defaultMessage="Max. Shifts" />,
          <FormattedMessage id="team.filledShifts" defaultMessage="Filled Shifts" />,
          <FormattedMessage id="team.status" defaultMessage="Status" />
        ]}
        widths={[35, 15, 15, 15, 20]}
        rows={teams.map(getRowModel)}
    />
  </section>
);