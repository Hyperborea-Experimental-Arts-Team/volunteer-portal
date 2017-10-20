import { connect } from 'react-redux';
import Page from '../components/Page';

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Page);
