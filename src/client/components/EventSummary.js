import React from 'react';
import { FormattedMessage } from 'react-intl';

import { concat } from '../util';

import theme from '../theme.css';
import style from './EventSummary.css';

export default ({ event }) => (
  <div className={style.EventSummary}>
    <div className={style.image}>
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
    </div>
  </div>
);