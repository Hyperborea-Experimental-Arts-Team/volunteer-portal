import React from 'react';
import Avatar from './Avatar';
import UserMenu from './UserMenu';
import style from './UserInfo.less';

export default ({ userName, avatarUrl, menuLabel }) => (
  <div className={style.UserInfo}>
    <div className={style.content}>
      <span className={style.name}>{userName}</span>
      <UserMenu label={menuLabel} />
    </div>
    <Avatar url={avatarUrl} name={userName} width="70" />
  </div>
);