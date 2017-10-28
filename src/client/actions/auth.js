/**
 * Actions related to authentication
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import { push } from 'react-router-redux';
import * as api from '../api';

import { invalidate } from './serviceCache';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

function loggingIn() {
  return { type: LOGGING_IN };
}

function loggedIn(token, user) {
  return { type: LOGGED_IN, token, user };
}

function loggedOut() {
  return { type: LOGGED_OUT };
}

export function autologin(token) {
  return dispatch => {
    dispatch(loggingIn());
    api.get('auth', token).then(response => {
      dispatch(invalidate());
      if (response.status === 200) {
        dispatch(loggedIn(token, response.data.user));
      }
      else {
        dispatch(logout());
      }
    });
  }
}

export function login(email, password) {

  return dispatch => {
    dispatch(loggingIn());
    api.post('auth', null, { email, password }).then(response => {
      if (response.status !== 200) {
        // TODO: Dispatch a login failed action for visual feedback
        console.error(response.data.error);
        return;
      }
      localStorage.setItem('token', response.data.token);
      dispatch(loggedIn(response.data.token, response.data.user));
      dispatch(push('/'));
    });
  }
}

export function logout(redirect) {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(loggedOut());
    redirect && dispatch(push('/login'));
  };
}