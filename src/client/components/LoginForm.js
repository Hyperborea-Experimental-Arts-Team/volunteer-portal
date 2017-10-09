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
//import styles from './LoginForm.css';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(logout());

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
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(login(email, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;

    return (
      <form  onSubmit={this.handleSubmit}>
        THIS IS THE LOGIN PAGE
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

export default connect(mapStateToProps)(LoginForm);