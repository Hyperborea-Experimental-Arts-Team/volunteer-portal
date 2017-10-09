/**
 * Actions for loading data from the server and caching the results.
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import * as api from '../api';

export const DATA_LOADED = 'DATA_LOADED';

function loaded(call, data) {
  return { type: DATA_LOADED, call, data };
}

export function load(call) {
  return dispatch => api.get(call)
    .then(data => dispatch(loaded(call, data)));
}