import React from 'react';
import { Link } from 'react-router-dom';
import { concat } from '../util';
import { FormattedMessage } from 'react-intl';
import Brand from './Brand';

import style from './Auth.less';
import grid from '../grid.less';
import theme from '../theme.css';

import LoginForm from './Login';
import { SignupForm } from './Signup';

const tabs = {
  login: {
    url: 'login',
    text: <FormattedMessage id="auth.signin" defaultMessage="Sign In" />,
    form: LoginForm
  },
  signup: {
    url: 'signup',
    text: <FormattedMessage id="auth.signup" defaultMessage="Sign Up" />,
    form: SignupForm
  }
};

class Auth extends React.Component {

  constructor() {
    super();
    this.state = { login: {}, signup: {} };
  }

  updateForm(form, field, value) {
    this.setState(Object.assign({}, this.state, {
      [form]:Object.assign({}, this.state[form], {
        [field]: value
      })
    }));
  }

  componentWillMount() {
    // reset login status
    this.props.loggedIn && this.props.onLogout();
  }

  render() {
    const { match, status, errors, onLogin, onSignup, photo } = this.props;

    return (
        <div className={concat(grid.row, grid.gutterless, style.wrap)}>
          <div className={concat(style.content, grid.col_sm_12, grid.col_md_5)}>
            <div className={concat(style.head, theme.txt_lightest, theme.bg_2)}>
              <Brand size={28} />
            </div>
            <div className={concat(style.form, theme.bg_content)}>
              <nav className={style.nav}>
                {Object.keys(tabs).map(tabId => {
                  const tab = tabs[tabId];
                  const selected = match.params.selectedTab === tab.url;
                  return (
                      <Link key={tabId} className={concat(style.link, selected ? style.selected : null)}
                            to={match.path.replace(':selectedTab', tab.url)}>{tab.text}
                        {selected ? <div className={concat(style.selector, theme.bg_3)}></div> : null}
                      </Link>
                  );})}
              </nav>
              <section className={concat(style.intro, theme.txt_dark)}>
                <FormattedMessage
                    id="login.intro"
                    defaultMessage="Welcome to Nyan, an event management tool. This platform has been built by and made for the regional Burning Man community and their events."
                />
              </section>
              {(() => {
                const formId = match.params.selectedTab;
                const Form = tabs[formId].form;
                return <Form status={status}
                             errors={errors}
                             onSignup={onSignup}
                             onLogin={onLogin}
                             state={this.state[formId]}
                             onChange={this.updateForm.bind(this, formId)} />;
              })()}
            </div>
          </div>
          <div className={concat(style.photo, grid.col_sm_0, grid.col_md_7)}
               style={{ backgroundImage: `url(${photo.url})` }}
          >
            <div className={concat(style.photoInfo, theme.txt_lightest)}>
              <div className={style.photoBy}>
                <span className={theme.txt_light}><FormattedMessage id="photo.by" defaultMessage="Photo by" /></span>
                <span className={style.photoByName}>{photo.by}</span>
              </div>
              <div className={style.photoTitle}>
                {photo.title}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Auth;
