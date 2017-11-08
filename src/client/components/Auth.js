import React from 'react';
import { Link } from 'react-router-dom';
import { concat } from '../util';
import { FormattedMessage } from 'react-intl';
import Brand from './Brand';

import style from './Auth.less';
import grid from '../grid.less';
import theme from '../theme.css';

const tabs = [{
  url: 'login',
  text: <FormattedMessage id="auth.signin" defaultMessage="Sign In" />
}, {
  url: 'signup',
  text: <FormattedMessage id="auth.signup" defaultMessage="Sign Up" />
}];

export default ({ match }) => (
  <div className={concat(grid.row, grid.gutterless, style.wrap)}>
    <div className={concat(style.content, grid.col_sm_12, grid.col_md_5)}>
      <div className={concat(style.head, theme.txt_1, theme.bg_2)}>
        <Brand size={14} />
      </div>
      <div className={concat(style.form, theme.bg_content)}>
        <nav className={style.nav}>
          {tabs.map(tab => {
            const selected = match.params.selectedTab === tab.url;
            return (
              <Link className={concat(style.link, selected ? style.selected : null)}
                    to={match.path.replace(':selectedTab', tab.url)}>{tab.text}
                {selected ? <div className={concat(style.selector, theme.bg_3)}></div> : null}
              </Link>
          );})}
        </nav>
        <section className={style.intro}>
          <FormattedMessage
              id="login.intro"
              defaultMessage="Welcome to Nyan, an event management tool. This platform has been built by and made for the regional Burning Man community and their events."
          />
        </section>
      </div>
    </div>
    <div className={concat(style.photo, grid.col_sm_0, grid.col_md_7)}
         style={{ backgroundImage: 'url(/hrpdrp.png' }}
    ></div>
  </div>
);
