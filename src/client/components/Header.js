import React from 'react';

import UserInfo from './UserInfo';
import Brand from './Brand';

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
        theme.page_padding,
        theme.bg_2,
        theme.txt_lightest,
        grid.row,
        grid.gutterless,
        small ? style.smallHeader : style.bigHeader
    )}>
      <div className={concat(
        grid.col_sm_12,
        grid.col_md_6,
        style.column
      )}>
        <Brand size={small ? 18 : 22} />
      </div>
      <div className={concat(
        grid.col_sm_12,
        grid.col_md_6,
        style.column
      )}>
        {userInfo}
      </div>
    </header>
  );
};