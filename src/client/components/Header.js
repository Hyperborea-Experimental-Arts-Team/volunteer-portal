import React from 'react';

import UserInfo from './UserInfo';

import { concat } from '../util';
import theme from '../theme.css';
import style from './Header.css';

export default ({ user }) => {

  const userInfo = !user ? '' :
      <UserInfo userName={user.name}
                avatarUrl={`/${user.avatar}`}
                menuLabel='Crustacean' />;

  return (
    <header className={concat(
        theme.bg_2,
        theme.txt_1,
        style.Header
    )}>
      <div className={style.brand}>Nyan</div>
      {userInfo}
    </header>
  );
};