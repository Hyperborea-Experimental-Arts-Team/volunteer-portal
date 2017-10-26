import React from 'react';

import UserInfo from './UserInfo';

import { concat } from '../util';
import theme from '../theme.css';
import style from './Header.less';
import grid from '../grid.less';

export default ({ user }) => {

  const userInfo = !user ? '' :
      <UserInfo userName={user.name}
                avatarUrl={`/${user.avatar}`}
                menuLabel='Crustacean'/>;

  return (
    <header className={concat(
        theme.bg_2,
        theme.txt_1,
        style.Header
    )}>
      <div className={grid.row} style={{position: 'relative'}}>
        <div className={concat(
          grid.col_sm_12,
          grid.col_md_6,
          grid.col_lg_3
        )}>
          <div className={style.brand}>Nyan</div>
        </div>
        <div className={concat(
          grid.col_sm_12,
          grid.col_md_6,
          grid.col_lg_3
        )}>
          {userInfo}
        </div>
      </div>
    </header>
  );
};