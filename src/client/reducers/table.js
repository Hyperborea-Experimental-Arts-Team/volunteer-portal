/**
 * Reducers related to table views
 *
 * @author mtownsend
 * @since Nov 2017
 */

import { TOGGLE_ROW } from '../actions/table';

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_ROW:
      const newRows = new Set(state[action.table]);
      newRows.has(action.key) ? newRows.delete(action.key) : newRows.add(action.key);
      return Object.assign({}, state, { [action.table]: newRows });
    default:
      return state;
  }
}