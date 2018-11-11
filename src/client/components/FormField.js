import React from 'react';
import { concat } from '../util';

import style from './FormField.less';

export default ({ icon, title, name, value = '', isObfuscated, isError, onChange }) => (
  <div className={style.wrap}>
    <input className={concat(style.input, value ? style.filled : '')}
           value={value}
           name={name}
           onChange={(e) => onChange(e.target.value)}
           type={isObfuscated ? 'password' : 'text'} />
    <div className={concat(style.placeholder, icon ? style.withIcon : '', isError ? style.error : null)}
         style={ icon ? { backgroundImage: `url(${icon})` } : null }>
      {title}
    </div>
  </div>
);