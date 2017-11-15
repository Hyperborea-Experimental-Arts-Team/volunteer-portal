/**
 * Loads data from the api, passing the response data as props
 * to the child Component. Uses cached response data if possible.
 *
 * @author mtownsend
 * @since Oct 2017
 */
import React from 'react';
import { connect } from 'react-redux';

import { load } from '../actions/serviceCache';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const mapStateToProps = state => {
  return {
    serviceCache: state.serviceCache,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: (call, token) => dispatch(load(call, token))
  };
};

class DataLoader extends React.Component {
  render() {
    const {
      serviceCall,
      serviceCache,
      component: Component,
      token,
      loadData,
      ...rest
    } = this.props;
    const data = serviceCache[serviceCall];

    // Still loading the required data, so show a spinner
    if (data == null) {
      loadData(serviceCall, token);
      return <Spinner />;
    }

    // The data load failed
    if (data.error) {
      return <Error message={data.message} />;
    }

    // Render the child Component with the response data
    return (
        <Component {...data} {...rest} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader);