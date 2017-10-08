/**
 * Actions related to authentication
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import { push } from 'react-router-redux';

export const LOGGED_IN = 'LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';

function loggedIn(email) {
  return { type: LOGGED_IN, email };
}

export function login(email, password) {
  // TODO: Actually call the server and authenticate
  return dispatch => {
    dispatch(loggedIn(email));
    dispatch(push('/'));
  };
}

export function logout() {
  // TODO: Actually clear the session
  return { type: LOG_OUT };
}