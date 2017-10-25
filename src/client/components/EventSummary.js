import React from 'react';
import { FormattedMessage } from 'react-intl';

import style from './EventSummary.css';

export default ({ event }) => (
  <div className={style.EventSummary}>
    <div className={style.image}></div>
    <div className={style.header}>
      <h3 className={style.name}>{event.name}</h3>
      <span class={style.num}>{event.numDepartments}</span>
      <FormattedMessage
          id="event.departments"
          defaultMessage="{n, plural, one {Department} other {Departments}}"
          values={{n: event.numDepartments}}
      />
      <span class={style.num}>{event.numVolunteers}</span>
      <FormattedMessage
          id="event.volunteers"
          defaultMessage="{n, plural, one {Volunteer} other {Volunteers}}"
          values={{n: event.volunteers}}
      />
    </div>


  </div>
);