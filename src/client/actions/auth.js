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
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGNING_UP = 'SIGNING_UP';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNED_UP = 'SIGNED_UP';

function loggingIn() {
  return { type: LOGGING_IN };
}

function loggedIn(token, user) {
  return { type: LOGGED_IN, token, user };
}

function loggedOut() {
  return { type: LOGGED_OUT };
}

function loginFailed() {
  return { type: LOGIN_FAILED };
}

function signingUp() {
  return { type: SIGNING_UP };
}

function signedUp() {
  return { type: SIGNED_UP };
}

function signupFailed() {
  return { type: SIGNUP_FAILED };
}

export function autologin(token) {
  return dispatch => {
    dispatch(loggingIn());
    api.get('login', token).then(response => {
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
    api.post('login', null, { email, password }).then(response => {
      if (response.status !== 200) {
        dispatch(loginFailed());
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

export function signup(firstname, lastname, email, password) {
  return dispatch => {
    dispatch(signingUp());
    api.post('signup', null, { firstname, lastname, email, password }).then(response => {
      if (response.status !== 200) {
        dispatch(signupFailed());
        return;
      }
      dispatch(signedUp());
    })
  };
}