/**
 * Reducers related to the service response cache
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { DATA_LOADED, DATA_ERROR, INVALIDATE } from '../actions/serviceCache';

export default (state = {}, action) => {
  switch(action.type) {
    case INVALIDATE:
      return {};
    case DATA_LOADED:
      return Object.assign({}, state, { [action.call]: action.data });
    case DATA_ERROR:
      return Object.assign({}, state, { [action.call]: { error: true, message: action.data }});
    default:
      return state;
  }
}