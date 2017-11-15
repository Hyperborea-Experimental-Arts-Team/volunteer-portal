import React from 'react';
import { Redirect } from 'react-router-dom';
import EventMenu from './EventMenu';
import EventOverview from './EventOverview';
import EventTeams from './Todo';
import EventVolunteers from './Todo';
import EventSchedule from './Todo';

import style from './Event.less';

function eventTab(selectedTab, eventId) {
  switch (selectedTab) {
    case 'overview':
      return <EventOverview eventId={eventId} />;
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