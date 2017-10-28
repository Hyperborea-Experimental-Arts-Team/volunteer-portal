/**
 * Route that redirects to /login if the user
 * is not authenticated
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

let PrivateRoute = ({ children, loggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn ? children : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default connect(mapStateToProps)(PrivateRoute);