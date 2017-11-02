import React from 'react';
import style from './Avatar.css';

export default ({ url, name, width }) => (
  <img src={`/${url}`}
       alt={name}
       className={style.Avatar}
       style={{ minWidth: `${width}px`, height: `${width}px` }}
  />
);