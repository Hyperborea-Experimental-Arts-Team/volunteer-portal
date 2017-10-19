import React from 'react';
import Avatar from './Avatar';
import style from './UserInfo.css';

export default ({ userName, avatarUrl }) => (
  <div className={style.UserInfo}>
    <span className={style.name}>{userName}</span>
    <Avatar url={avatarUrl} width="70" />
  </div>
);