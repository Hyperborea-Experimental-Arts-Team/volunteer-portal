import React from 'react';
import { concat } from '../util';

import style from './Link.less';

export default ({ label, icon, className = '' }) => (
  <div className={concat(className, style.wrap)}>
    {label}
    { icon ? <img src={icon} className={style.icon} /> : null }
  </div>
);