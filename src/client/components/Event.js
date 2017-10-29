import React from 'react';
import { Redirect } from 'react-router-dom';
import EventMenu from './EventMenu';
import EventOverview from './EventOverview';
import EventTeams from './Todo';
import EventVolunteers from './Todo';
import EventSchedule from './Todo';
import DataLoader from '../containers/DataLoader';

import { concat } from '../util';
import style from './Event.less';
import theme from '../theme.css';
import grid from '../grid.less';

function eventTab(selectedTab, eventId) {
  switch (selectedTab) {
    case 'overview':
      return <DataLoader serviceCall={`events/${eventId}`} component={EventOverview} />;
    case 'teams':
      return <EventTeams />;
    case 'volunteers':
      return <EventVolunteers />;
    case 'schedule':
      return <EventSchedule />;
    default:
      return <Redirect to={`/event/${eventId}/overview`} />
  }
}

export default ({ match }) => (
  <div className={style.Event}>
    <EventMenu eventId={match.params.id} selectedTab={match.params.selectedTab} />
    {eventTab(match.params.selectedTab, match.params.id)}
  </div>
);