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

const mapStateToProps = state => {
  return {
    serviceCache: state.serviceCache
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: call => dispatch(load(call))
  };
};

class DataLoader extends React.Component {
  render() {
    const {
      serviceCall,
      serviceCache,
      component: Component,
      ...rest
    } = this.props;
    const data = serviceCache[serviceCall];

    // Still loading the required data, so show a spinner
    if (data == null) {
      return (<div>LOADING...</div>);
    }

    // Render the child Component with the response data
    return (
      <Component {...data} {...rest} />
    );
  }

  componentDidMount() {
    const { serviceCall, serviceCache, loadData } = this.props;
    const data = serviceCache[serviceCall];

    // Data isn't already in the cache, so request it
    if (!data) {
      loadData(serviceCall);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader);