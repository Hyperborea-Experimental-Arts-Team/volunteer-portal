import React from 'react';
import { Redirect } from 'react-router-dom';
import EventMenu from './EventMenu';
import EventOverview from './Todo';
import EventTeams from './Todo';
import EventVolunteers from './Todo';
import EventSchedule from './Todo';

import { concat } from '../util';
import style from './Event.less';
import theme from '../theme.css';
import grid from '../grid.less';

function eventTab(selectedTab, defaultUrl) {
  switch (selectedTab) {
    case 'overview':
      return <EventOverview />;
    case 'teams':
      return <EventTeams />;
    case 'volunteers':
      return <EventVolunteers />;
    case 'schedule':
      return <EventSchedule />;
    default:
      return <Redirect to={defaultUrl} />
  }
}

export default ({ match }) => (
  <div className={style.Event}>
    <EventMenu eventId={match.params.id} selectedTab={match.params.selectedTab} />
    {eventTab(match.params.selectedTab, `/event/${match.params.id}/overview`)}
  </div>
);