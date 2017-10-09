/**
 * Reducers related to the service response cache
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { DATA_LOADED } from '../actions/serviceCache';

export default (state = {}, action) => {
  switch(action.type) {
    case DATA_LOADED:
      return Object.assign({}, state, { [action.call]: action.data });
    default:
      return state;
  }
}