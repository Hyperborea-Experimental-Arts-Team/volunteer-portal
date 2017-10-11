import React from 'react';

import { concat } from '../util';
import theme from '../theme.css';
import style from './Header.css';

export default () => (
  <header className={concat(
      theme.bg_2,
      theme.txt_1,
      style.Header
  )}>
    <div className={style.brand}>Nyan</div>
  </header>
);