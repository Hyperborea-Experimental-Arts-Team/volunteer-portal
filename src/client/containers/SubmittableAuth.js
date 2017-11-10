import { connect } from 'react-redux';
import { login, logout } from '../actions/auth'

import Auth from '../components/Auth';

const mapDispatchToProps = dispatch => ({
  onLogin: (email, password) => dispatch(login(email, password)),
  onLogout: () => dispatch(logout(false))
});

const mapStateToProps = state => ({
  failed: state.auth.failed
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
