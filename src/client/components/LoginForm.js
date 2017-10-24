/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Button from './Button';
import TextInput from './TextInput';
import { login, logout } from '../actions/auth';
import { concat } from '../util';

import grid from '../grid.css';
import theme from '../theme.css';
import style from './LoginForm.css';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    // reset login status
    this.props.onLogout();

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    email && password && this.props.onLogin(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className={concat(
          grid.col_sm_12,
          grid.col_md_6,
          grid.col_lg_4
      )}>
        <h2 className={concat(style.header, theme.txt_1)}>
          <FormattedMessage id="login.title" defaultMessage="Login" />
        </h2>
        <form className={concat(
            theme.bg_content,
            style.LoginForm)} onSubmit={this.handleSubmit}>
          The login is butts@butts.com:buttsRgr8
          <TextInput name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
          <TextInput name="password" value={password} placeholder="Password" onChange={this.handleChange} />
          <Button text="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.auth;
  return {
    loggingIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
    onLogout: () => dispatch(logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);