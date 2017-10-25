import React from 'react';
import { FormattedDate } from 'react-intl';

import style from './BigDate.css';

export default ({ date, label }) => {
  const d = new Date(date);
  return (
    <div className={style.wrap}>
      <div className={style.day}>
        {d.getDate()}
      </div>
      <div className={style.rest}>
        <div className={style.label}>{label}</div>
        <div className={style.line}><FormattedDate value={d} year="numeric" month="long" /></div>
        <div className={style.line}><FormattedDate value={d} weekday="long" hour="numeric" minute="numeric" /></div>
      </div>
    </div>
  );
}