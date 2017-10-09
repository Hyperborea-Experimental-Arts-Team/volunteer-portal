/**
 * Reducers related to authentication
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { LOGGED_IN, LOG_OUT } from '../actions/auth';

export default (state = { loggedIn: true, user: {} }, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, { loggedIn: true });
    case LOG_OUT:
      return Object.assign({}, state, { loggedIn: false });
    default:
      return state;
  }
}