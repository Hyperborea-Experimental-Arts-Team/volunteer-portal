/**
 * Reducers related to the Splash component
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { REVERSE_SPIN } from '../actions/splash';

export default (state = { reverseSpin: false }, action) => {
  switch (action.type) {
    case REVERSE_SPIN:
      return Object.assign({}, state, { reverseSpin: !state.reverseSpin });
    default:
      return state;
  }
}