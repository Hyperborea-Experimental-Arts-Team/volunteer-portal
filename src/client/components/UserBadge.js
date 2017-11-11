import React from 'react';
import Avatar from './Avatar';
import { concat } from '../util';

import style from './UserBadge.less';
import theme from '../theme.css';

const COLOURS = {
  dark: [ theme.txt_dark, theme.txt_darkest ],
  light: [ theme.txt_light, theme.txt_lightest ]
};

export default ({ title, name, avatar, theme = "dark", justify = "left", className = '' }) => (
  <div className={concat(className, style.wrap, style[`justify-${justify}`])} >
    <Avatar url={avatar} name={name} width={40} />
    <div className={style.info}>
      <div className={concat(COLOURS[theme][0], style.title)}>{title}</div>
      <div className={concat(COLOURS[theme][1], style.name)}>{name}</div>
    </div>
  </div>
);