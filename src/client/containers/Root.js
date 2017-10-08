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

import ReversibleSplash from '../containers/ReversibleSplash';
import LoginForm from '../components/LoginForm';
import PrivateRoute from './PrivateRoute';

// Create browser history object
const history = createHistory();
const loggerMiddleware = createLogger();
const routeMiddleware = routerMiddleware(history);

// Initialize the Redux store
const store = createStore(
  combineReducers({
    splash: splashReducer,
    auth: authReducer,
    router: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routeMiddleware
  )
);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <PrivateRoute exact path="/" component={ReversibleSplash} />
        <Route path="/login" component={LoginForm} />
      </div>
    </ConnectedRouter>
  </Provider>
);
