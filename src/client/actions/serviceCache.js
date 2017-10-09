/**
 * Actions for loading data from the server and caching the results.
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import fetch from 'isomorphic-fetch';

export const DATA_LOADED = 'DATA_LOADED';

function loaded(call, data) {
  return { type: DATA_LOADED, call, data };
}

export function load(call) {
  return dispatch => fetch(`api/${call}`).then(response => {
    // TODO: Error handling
    return response.json();
  }).then(data => dispatch(loaded(call, data)));
}