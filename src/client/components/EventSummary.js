import React from 'react';
import { FormattedMessage } from 'react-intl';

import { concat } from '../util';
import BigDate from './BigDate';
import DateRange from './DateRange';
import Content from './Content';
import Image from './Image';

import theme from '../theme.css';
import style from './EventSummary.css';

function bg(alt) {
  return alt ? theme.bg_4 : theme.bg_3;
}

function renderDates(start, end, big, altBg) {
  if (big) {
    return (
      <div className={concat(style.dates, bg(altBg), theme.txt_1)}>
        <BigDate date={start} label={<FormattedMessage id="date.start" defaultMessage="Start" />}/>
        <BigDate date={end} label={<FormattedMessage id="date.end" defaultMessage="End" />}/>
      </div>
    );
  }
  else {
    return <DateRange start={start} end={end} />
  }
}

export default ({ event }) => (
  <div className={style.EventSummary}>
    <Image url={event.photo} ratio={1}>
      <div className={concat(style.header, theme.txt_1)}>
        <h3 className={style.name}>{event.name}</h3>
        {event.numDepartments}&nbsp;
        <span className={theme.txt_3}>
          <FormattedMessage
              id="event.departments"
              defaultMessage="{n, plural, one {Department} other {Departments}}"
              values={{n: event.numDepartments}}
          />
        ,&#32;</span>
        {event.numVolunteers}&nbsp;
        <span className={theme.txt_3}>
          <FormattedMessage
              id="event.volunteers"
              defaultMessage="{n, plural, one {Volunteer} other {Volunteers}}"
              values={{n: event.volunteers}}
          />
        </span>
      </div>
    </Image>
    {renderDates(event.startDate, event.endDate, event.active, !(event.id % 2))}
    {event.active ? <Content>{event.address}</Content> : null}
  </div>
);