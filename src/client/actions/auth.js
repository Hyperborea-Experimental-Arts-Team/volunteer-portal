/**
 * Actions related to authentication
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import { push } from 'react-router-redux';
import * as api from '../api';

export const LOGGED_IN = 'LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';

function loggedIn(user) {
  return { type: LOGGED_IN, user };
}

export function login(email, password) {

  return dispatch =>
    // TODO: Hash the password
    api.post('auth', { email, password }).then(response => {
      // TODO: Handle invalid login
      dispatch(loggedIn({ email: response.email }));
      dispatch(push('/'));
    });
}

export function logout() {
  // TODO: Actually clear the session
  return { type: LOG_OUT };
}