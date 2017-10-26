import React from 'react';

import { concat } from '../util';
import Header from './Header';
import Footer from './Footer';
import style from './Page.css';
import grid from '../grid.less';

export default ({ user, children }) => (
  <div className={style.Page}>
    <Header user={user} />
    <section className={style.content}>
      <div className={concat(grid.row, style.layout)}>
        {children}
      </div>
    </section>
    <Footer />
  </div>
);