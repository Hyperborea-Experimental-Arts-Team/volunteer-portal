import React from 'react';
import { combineReducers } from 'redux'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import splashReducer from '../reducers/splash';
import authReducer from '../reducers/auth';
import cacheReducer from '../reducers/serviceCache';

import Page from '../components/Page';
import LoginForm from '../components/LoginForm';
import ReversibleSplash from './ReversibleSplash';
import PrivateRoute from './PrivateRoute';

import { autologin } from '../actions/auth';

// Create browser history object
const history = createHistory();
const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(history);

// Check for a stored login token
const token = localStorage.getItem('token');
const initialState = {};
if (token) {
  // Assume token is good for purposes of initial routing
  initialState.auth = {
    loggedIn: true,
    token,
    user: null
  };
}

// Initialize the Redux store
const store = createStore(

  // Root reducer, composed of other reducers
  combineReducers({
    splash: splashReducer,
    auth: authReducer,
    router: routerReducer,
    serviceCache: cacheReducer
  }),

  // Initial state
  initialState,

  // Middleware
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routeMiddleware
  )
);

if (token) {
  // Now actually check the token
  store.dispatch(autologin(token));
}

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Page>
        <PrivateRoute path="/" component={ReversibleSplash} />
        <Route path="/login" component={LoginForm} />
      </Page>
    </ConnectedRouter>
  </Provider>
);
