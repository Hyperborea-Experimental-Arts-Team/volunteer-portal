import React from 'react';
import { concat } from '../util';

import theme from '../theme.css';
import style from './Content.css';

export default ({ children }) => (
  <div className={concat(style.content, theme.bg_content, theme.txt_darkest)}>
    {children}
  </div>
);