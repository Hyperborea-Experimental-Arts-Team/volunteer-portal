import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from './PageTitle';
import { concat } from '../util';
import DataLoader from '../containers/DataLoader';
import Image from './Image';
import UserBadge from './UserBadge';

import grid from '../grid.less';
import theme from '../theme.css';
import style from './EventDepartments.less';

const LeadInfo = lead => (
  <div className={theme.txt_darkest}>
    <Image className={style.photo} url={lead.avatar} ratio={1} />
    <div className={concat(style.leadInfo, theme.bg_content)}>
      <div className={concat(style.leadTitle, theme.txt_light)}>
        <FormattedMessage id="event.lead" defaultMessage="Event Lead" />
      </div>
      <div className={style.leadName}>
        {lead.name}
      </div>
      <div className={style.leadContact}>
        {lead.email}
      </div>
    </div>
  </div>
);

const DepartmentNumbers = () => (
  <div className={concat(style.numberSection, theme.divider)}>
    TODO
  </div>
);

const DepartmentList = ({ departments }) => (
  <div>
    <h3 className={theme.title}>
      <FormattedMessage id="departments.title" defaultMessage="Departments" />
      <div className={style.departmentList}>
        { departments.map(department => {
          const numVolunteers = department.teams.reduce(
              (volunteers, team) => volunteers + team.roles.reduce(
                  (v, role) => v + role.filledShifts, 0), 0);
          return (
            <UserBadge name={department.name}
                       title={<FormattedMessage id="department.stats"
                                                defaultMessage="{teams} {teams, plural, one {team} other {teams}} • {volunteers} {volunteers, plural, one {volunteer} other {volunteers}}"
                                                values={{
                                                  teams: department.teams.length,
                                                  volunteers: numVolunteers
                                                }} />}
                       avatar={department.lead.avatar} />
          );
        })}
      </div>
    </h3>
  </div>
);

const SummaryRow = ({ eventId }) => (
  <div className={grid.row}>
    <section className={grid.col_sm_4} style={{position: 'relative'}}>
      <PageTitle className={theme.txt_lightest}
                 title={<FormattedMessage id="event.teams" defaultMessage="Departments & Teams" />}
                 link={`/event/${eventId}/overview`} />
      <DataLoader serviceCall={`events/${eventId}/lead`} component={LeadInfo} />
    </section>
    <section className={grid.col_sm_8}>
      <div className={concat(style.info, theme.bg_content)}>
        <DepartmentNumbers />
        <DataLoader serviceCall={`events/${eventId}/departments`} component={DepartmentList} />
      </div>
    </section>
  </div>
);

export default ({ eventId }) => (
  <div className={concat(style.wrap, theme.page_padding)}>
    <SummaryRow eventId={eventId} />
  </div>
);