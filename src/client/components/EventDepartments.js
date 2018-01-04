import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from './PageTitle';
import { concat } from '../util';
import DataLoader from '../containers/DataLoader';
import Image from './Image';
import UserBadge from './UserBadge';
import SubMenu from './SubMenu';
import FormField from './FormField';
import Button from './Button';
import EventDepartmentsList from './EventDepartmentsList';
import BigNumber from './BigNumber';

import grid from '../grid.less';
import theme from '../theme.css';
import style from './EventDepartments.less';
import searchSvg from '../images/search.svg';
import addSvg from '../images/add.svg';
import editSvg from '../images/edit.svg';

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

const DepartmentNumbers = ({ departments }) => {

  // This is fucking awful, Michael. Definitely do it better when there's a real data model.
  const numLeads = departments.reduce((num, department) => num + department.leads.length, 0);
  const numTeams = departments.reduce((num, department) => num + department.teams.length, 0);
  const numTeamLeads = departments.reduce(
      (num, department) => num + department.teams.reduce(
          (num, team) => num + team.leads.length, 0), 0);
  const numVolunteers = departments.reduce(
      (num, department) => num + department.teams.reduce(
          (num, team) => team.roles.reduce(
              (num, role) => num + role.filledShifts
          , 0)
      , 0)
  , 0);

  return (
      <div className={concat(style.numberSection, theme.divider)}>
        <div className={style.numberColumn}>
          <BigNumber
              label={<FormattedMessage id="departments.title" defaultMessage="Departments" />}
              infoLines={[
                (<FormattedMessage id="department.leads"
                                   defaultMessage="{leads} Department {leads, plural, one {Lead} other {Leads}}"
                                   values={{ leads: numLeads }}
                />),
                (<FormattedMessage id="department.teams"
                                   defaultMessage="{teams} {teams, plural, one {Team} other {Teams}}"
                                   values={{ teams: numTeams }}
                />)
              ]}
              number={departments.length}
              className={theme.txt_accent}
          />
          <BigNumber
              label={<FormattedMessage id="teams.title" defaultMessage="Teams" />}
              infoLines={[
                (<FormattedMessage id="team.leads"
                                   defaultMessage="{leads} Team {leads, plural, one {Lead} other {Leads}}"
                                   values={{ leads: numTeamLeads }}
                />),
                (<FormattedMessage id="department.volunteers"
                                   defaultMessage="{volunteers} {volunteers, plural, one {Volunteer} other {Volunteers}}"
                                   values={{ volunteers: numVolunteers }}
                />)
              ]}
              number={numTeams}
              className={theme.txt_accent}
          />
        </div>
        <div className={style.numberColumn}>
          <BigNumber
              label={<FormattedMessage id="departments.title" defaultMessage="Departments" />}
              infoLines={[
                (<FormattedMessage id="department.leads"
                                   defaultMessage="{leads} Department {leads, plural, one {Lead} other {Leads}}"
                                   values={{ leads: numLeads }}
                />),
                (<FormattedMessage id="department.teams"
                                   defaultMessage="{teams} {teams, plural, one {Team} other {Teams}}"
                                   values={{ teams: numTeams }}
                />)
              ]}
              number={departments.length}
              className={theme.txt_accent}
          />
          <BigNumber
              label={<FormattedMessage id="volunteers.title" defaultMessage="Volunteers" />}
              infoLines={[
                (<FormattedMessage id="department.volunteers"
                                   defaultMessage="{volunteers} {volunteers, plural, one {Volunteer} other {Volunteers}}"
                                   values={{ volunteers: numVolunteers }}
                />)
              ]}
              number={numVolunteers}
              className={theme.txt_accent}
          />
        </div>
      </div>
  );
};

const DepartmentList = ({ departments }) => (
  <div>
    <h3 className={theme.title}>
      <FormattedMessage id="departments.title" defaultMessage="Departments" />
      <div className={style.departmentList}>
        { departments.map((department, i) => {
          const numVolunteers = department.teams.reduce(
              (volunteers, team) => volunteers + team.roles.reduce(
                  (v, role) => v + role.filledShifts, 0), 0);
          return (
            <UserBadge key={i}
                       name={department.name}
                       title={<FormattedMessage id="department.stats"
                                                defaultMessage="{teams} {teams, plural, one {team} other {teams}} • {volunteers} {volunteers, plural, one {volunteer} other {volunteers}}"
                                                values={{
                                                  teams: department.teams.length,
                                                  volunteers: numVolunteers
                                                }} />}
                       avatar={department.leads[0].avatar} />
          );
        })}
      </div>
    </h3>
  </div>
);

const SummaryRow = ({ eventId }) => (
  <div className={theme.page_padding}>
    <div className={grid.row}>
      <section className={grid.col_sm_4} style={{position: 'relative'}}>
        <PageTitle className={theme.txt_lightest}
                   title={<FormattedMessage id="event.teams" defaultMessage="Departments & Teams" />}
                   link={`/event/${eventId}/overview`} />
        <DataLoader serviceCall={`events/${eventId}/lead`} component={LeadInfo} />
        <Button text={<FormattedMessage
                          id="department.create"
                          defaultMessage="Create New Department"/>}
                icon={addSvg}
                className={concat(style.button, theme.bg_3, theme.txt_lightest)}
        />
        <Button text={<FormattedMessage
                          id="department.edit"
                          defaultMessage="Edit Departments"/>}
                icon={editSvg}
                className={concat(style.button, theme.bg_2, theme.txt_lightest)}
        />
      </section>
      <section className={grid.col_sm_8}>
        <div className={concat(style.info, theme.bg_content)}>
          <DataLoader serviceCall={`events/${eventId}/departments`} component={DepartmentNumbers} />
          <DataLoader serviceCall={`events/${eventId}/departments`} component={DepartmentList} />
        </div>
      </section>
    </div>
  </div>
);

const Departments = ({ eventId }) => (
  <div className={theme.page_padding}>
    <DataLoader serviceCall={`events/${eventId}/departments`}
                component={EventDepartmentsList} />
  </div>
);

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = { search: '' };
  }

  setSearch(value) {
    this.setState(Object.assign({}, this.state, {
      search: value
    }));
  }

  render() {
    return (
        <form className={concat(style.search, theme.txt_lightest)}>
          <FormField name="search"
                     icon={searchSvg}
                     value={this.state.search}
                     onChange={v => this.setSearch(v)}
                     title={<FormattedMessage
                               id="search"
                               defaultMessage="Search" />} />
        </form>
    );
  }
}

export default ({ eventId }) => (
  <div>
    <SummaryRow eventId={eventId} />
    <SubMenu>
      <SearchForm />
    </SubMenu>
    <Departments eventId={eventId} />
  </div>
);
