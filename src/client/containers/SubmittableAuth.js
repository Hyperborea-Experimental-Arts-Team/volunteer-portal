import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/auth'

import Auth from '../components/Auth';

const mapDispatchToProps = dispatch => ({
   onLogin: (email, password) => dispatch(login(email, password)),
  onSignup: (...data) => dispatch(signup(...data)),
  onLogout: () => dispatch(logout(false))
});

const mapStateToProps = state => ({
  status: state.auth.status,
  errors: state.auth.errors,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
