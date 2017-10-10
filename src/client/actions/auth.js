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

function loggedIn(token, user) {
  return { type: LOGGED_IN, token, user };
}

export function login(email, password) {

  return dispatch =>
    api.post('auth', null, { email, password }).then(response => {
      if (response.status !== 200) {
        // TODO: Dispatch a login failed action for visual feedback
        console.error(response.data.error);
        return;
      }
      dispatch(loggedIn(response.data.token, response.data.user));
      dispatch(push('/'));
    });
}

export function logout() {
  // TODO: Actually clear the session
  return { type: LOG_OUT };
}