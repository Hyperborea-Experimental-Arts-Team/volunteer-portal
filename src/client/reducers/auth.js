/**
 * Reducers related to authentication
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { LOGGED_IN, LOGGING_IN, LOGGED_OUT } from '../actions/auth';

export default (state = { loggedIn: false, token: null, user: null }, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return Object.assign({}, state, { loggingIn: true });
    case LOGGED_IN:
      if (!state.loggingIn) {
        // Login was aborted on the client-side
        return state;
      }
      return { loggedIn: true, token: action.token, user: action.user };
    case LOGGED_OUT:
      return { loggedIn: false, token: null, user: null };
    default:
      return state;
  }
}