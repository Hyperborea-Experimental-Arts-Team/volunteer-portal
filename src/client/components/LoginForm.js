/**
 * Component for user login
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import AuthButton from '../containers/AuthButton';
import TextInput from './TextInput';
import { login, logout } from '../actions/auth';
import styles from './LoginForm.css';

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
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;

    return (
      <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
        The login is butts@butts.com:buttsRgr8
        <TextInput name="email" value={email} placeholder="Email Address" onChange={this.handleChange} />
        <TextInput name="password" value={password} placeholder="Password" onChange={this.handleChange} />
        <Button text="Submit" type="submit" />
      </form>
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