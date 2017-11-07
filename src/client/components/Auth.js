import React from 'react';
import { concat } from '../util';
import { FormattedMessage } from 'react-intl';
import Brand from './Brand';

import style from './Auth.less';
import grid from '../grid.less';
import theme from '../theme.css';

export default ({}) => (
  <div className={concat(grid.row, grid.gutterless, style.wrap)}>
    <div className={concat(style.content, grid.col_sm_12, grid.col_md_5)}>
      <div className={concat(style.head, theme.txt_1, theme.bg_2)}>
        <Brand size={14} />
      </div>
      <div className={concat(style.form, theme.bg_content)}>
        <div className={style.nav}>
          <FormattedMessage id="auth.signin" defaultMessage="Sign In" />
          <FormattedMessage id="auth.signup" defaultMessage="Sign Up" />
        </div>
      </div>
    </div>
    <div className={concat(style.photo, grid.col_sm_0, grid.col_md_7)}
         style={{ backgroundImage: 'url(/hrpdrp.png' }}
    ></div>
  </div>
);
