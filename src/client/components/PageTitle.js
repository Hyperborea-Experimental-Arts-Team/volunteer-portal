import React from 'react';
import { Link } from 'react-router-dom';
import { concat } from '../util';

import style from './PageTitle.less';

export default ({ className = '', title, link }) => (
  <div className={concat(className, style.pageTitle)}>
    {link ? <Link to={link}>←</Link> : null}
    {title}
  </div>
);