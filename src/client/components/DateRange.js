import React from 'react';
import { FormattedDate } from 'react-intl';

import date from '../images/date.svg';
import style from './DateRange.less';

export default ({ start, end }) => (
  <div className={style.wrap} style={{ backgroundImage: `url(${date})` }}>
    <FormattedDate value={start} day="numeric" month="short" year="numeric" /> - <FormattedDate value={end} day="numeric" month="short" year="numeric" />
  </div>
);