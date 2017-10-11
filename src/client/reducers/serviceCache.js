/**
 * Reducers related to the service response cache
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { DATA_LOADED } from '../actions/serviceCache';
import { LOGGED_IN } from '../actions/auth';

export default (state = {}, action) => {
  switch(action.type) {
    case LOGGED_IN:
      // Fresh login means all the responses could be invalid
      return {};
    case DATA_LOADED:
      return Object.assign({}, state, { [action.call]: action.data });
    default:
      return state;
  }
}