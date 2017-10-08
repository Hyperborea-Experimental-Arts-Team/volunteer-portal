import { connect } from 'react-redux';
import { login, logout } from '../actions/auth';
import Button from '../components/Button';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: () => {
      dispatch(login());
    },
    onLogOut: () => {
      dispatch(logout());
    }
  };
};

const mergeProps = (state, actions, props) => ({
  ...props,
  text: state.loggedIn ? 'Log Out' : 'Log In',
  onClick: state.loggedIn ? actions.onLogOut : actions.onLogIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Button);