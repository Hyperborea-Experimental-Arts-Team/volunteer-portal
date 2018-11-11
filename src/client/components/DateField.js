import React from "react";

import { concat } from '../util';

import style from './FormField.less';

export default ({ icon, title, name, id, value = '', isError, onChange }) => (
      <div className={style.wrap}>
        <input type="text"
            id={id}
            name={name}
            className={concat(style.input, value ? style.filled : '')}
            value={value}
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => { if (!e.target.value) e.target.type='text' }}
            onChange={e => onChange(e.target.value)}
            placeholder={false}/>
        <div className={concat(style.placeholder, icon ? style.withIcon : '', isError ? style.error : null)}
             style={ icon ? { backgroundImage: `url(${icon})` } : null }>
          {title}
        </div>
      </div>
);

