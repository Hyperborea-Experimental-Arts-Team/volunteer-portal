import React from 'react';
import style from './Spinner.css';

export default () => (
  <div className={style.position}>
    <img src="/nyan.gif" alt="nyan" className={style.spinner} />
  </div>
);