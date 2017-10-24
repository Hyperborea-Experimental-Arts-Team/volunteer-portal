import React from 'react';

import { concat } from '../util';
import Header from './Header';
import Footer from './Footer';
import style from './Page.css';
import theme from '../theme.css';
import grid from '../grid.css';

export default ({ children }) => (
  <div className={concat(style.Page, theme.bg_1)}>
    <Header />
    <section className={style.content}>
      {children}
    </section>
    <Footer />
  </div>
);