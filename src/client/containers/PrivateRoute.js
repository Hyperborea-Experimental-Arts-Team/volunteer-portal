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
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

let PrivateRoute = ({ component: Component, loggedIn, user, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn ? (
      <Component user={user} match={props.match} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default connect(mapStateToProps)(PrivateRoute);