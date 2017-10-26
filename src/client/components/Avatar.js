import React from 'react';
import style from './Avatar.css';

export default ({ url, width }) => (
  <img src={url}
       className={style.Avatar}
       style={{ width: `${width}px`, height: `${width}px` }}
  />
);