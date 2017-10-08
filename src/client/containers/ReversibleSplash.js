import { connect } from 'react-redux';
import { reverseSpin } from '../actions/splash';
import Splash from '../components/Splash';

const mapStateToProps = state => {
  return {
    reverse: state.splash.reverseSpin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoClick: () => {
      dispatch(reverseSpin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);