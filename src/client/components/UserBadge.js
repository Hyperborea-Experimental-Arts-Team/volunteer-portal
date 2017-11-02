import React from 'react';
import Avatar from './Avatar';
import { concat } from '../util';

import style from './UserBadge.less';
import theme from '../theme.css';

export default ({ title, name, avatar }) => (
  <div className={style.wrap}>
    <div className={style.info}>
      <div className={concat(theme.txt_dark, style.title)}>{title}</div>
      <div className={concat(theme.txt_darkest, style.name)}>{name}</div>
    </div>
    <Avatar url={avatar} name={name} width={40} />
  </div>
);