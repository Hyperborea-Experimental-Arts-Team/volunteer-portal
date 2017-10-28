import React from 'react';

import UserInfo from './UserInfo';

import { concat } from '../util';
import theme from '../theme.css';
import style from './Header.less';
import grid from '../grid.less';

export default ({ user, small }) => {

  const userInfo = !user ? '' :
      <UserInfo userName={user.name}
                avatarUrl={`/${user.avatar}`}
                menuLabel='Crustacean'
                small={small} />;

  return (
    <header className={concat(
        theme.bg_2,
        theme.txt_1,
        small ? style.smallHeader : style.bigHeader
    )}>
      <div className={grid.row} style={{position: 'relative'}}>
        <div className={concat(
          grid.col_sm_12,
          grid.col_md_6
        )}>
          <div className={style.brand}>Nyan</div>
        </div>
        <div className={concat(
          grid.col_sm_12,
          grid.col_md_6
        )}>
          {userInfo}
        </div>
      </div>
    </header>
  );
};