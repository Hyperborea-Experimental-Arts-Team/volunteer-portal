import React from 'react';
import style from './Brand.less';

export default ({ size }) => (
  <div className={style.brand} style={{fontSize: `${size}px`}}>Nyan</div>
);