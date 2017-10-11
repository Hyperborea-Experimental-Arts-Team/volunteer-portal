import React from 'react';

import { concat } from '../util';
import theme from '../theme.css';
import style from './Footer.css';

export default () => (
  <footer className={concat(
      theme.bg_content,
      theme.txt_min,
      style.Footer
  )}>
    &copy; Nyan
  </footer>
);