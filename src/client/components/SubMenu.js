import React from 'react';
import { concat } from '../util';

import style from './SubMenu.less';
import theme from '../theme.css';

export default ({ className, children }) => (
  <nav className={concat(className, style.SubMenu, theme.bg_3, theme.page_padding)}>
    {children}
  </nav>
);