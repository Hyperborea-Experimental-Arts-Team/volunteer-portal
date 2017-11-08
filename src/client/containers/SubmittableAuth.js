import { connect } from 'react-redux';
import { login, logout } from '../actions/auth'

import Auth from '../components/Auth';

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(login(email, password)),
    onLogout: () => dispatch(logout(false))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
