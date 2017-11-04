import React from 'react';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import { IntlProvider, addLocaleData } from 'react-intl';
import enData from 'react-intl/locale-data/en';
import enMessages from '../langs/en';

import authReducer from '../reducers/auth';
import cacheReducer from '../reducers/serviceCache';

import { autologin } from '../actions/auth';
import { invalidate } from '../actions/serviceCache';

import Nyan from '../components/Nyan';

const history = createHistory();
const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(history);

const middlewares = [ thunkMiddleware, routeMiddleware ];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

// Support English only for now
addLocaleData(enData);
const locale = 'en';

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
    auth: authReducer,
    router: routerReducer,
    serviceCache: cacheReducer
  }),

  // Initial state
  initialState,

  // Middleware
  applyMiddleware(...middlewares)
);

if (token) {
  // Now actually check the token
  store.dispatch(autologin(token));
}

// Debugging tool for invalidating response caches
// TODO: Remove this in production
if (typeof window !== 'undefined' && window) {
  window.invalidate = () => store.dispatch(invalidate());
}

export default () => (
    <IntlProvider locale={locale} messages={enMessages}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Nyan />
        </ConnectedRouter>
      </Provider>
    </IntlProvider>
);

