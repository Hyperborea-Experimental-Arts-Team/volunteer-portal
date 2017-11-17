/**
 * Loads data from the api, passing the response data as props
 * to the child Component. Uses cached response data if possible.
 *
 * @author mtownsend
 * @since Oct 2017
 */
import React from 'react';
import { connect } from 'react-redux';

import { LOADING } from '../reducers/serviceCache';
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
      loadData,
      token,
      ...rest
    } = this.props;
    const data = serviceCache[serviceCall];

    // Loading data. Spin spin spin.
    if (data == null || data === LOADING) {
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

  componentWillMount() {
    const {
      serviceCall,
      token,
      serviceCache,
      loadData
    } = this.props;
    // Nothing in the cache. Load it.
    if (serviceCache[serviceCall] == null) {
      loadData(serviceCall, token);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader);