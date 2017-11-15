/**
 * Actions for loading data from the server and caching the results.
 *
 * @author mtownsend
 * @since Oct 2017
 **/

import * as api from '../api';

export const DATA_ERROR = 'DATA_ERROR';
export const DATA_LOADED = 'DATA_LOADED';
export const INVALIDATE = 'INVALIDATE';

function loaded(call, data) {
  return { type: DATA_LOADED, call, data };
}

function errored(call, data) {
  return { type: DATA_ERROR, call, data };
}

/**
 * Load data from the api
 * @param {string} call - API call to make
 * @param {string} token - JWT auth token
 * @returns {Function} Action thunk
 */
export function load(call, token) {
  return dispatch => api.get(call, token)
    .then(response => {
      if (response.status === 200) {
        return dispatch(loaded(call, response.data));
      }
      else {
        return dispatch(errored(call, response.data));
      }
    });
}

/**
 * Invalidates the cache
 * @returns {{type: string}}
 */
export function invalidate() {
  return { type: INVALIDATE };
}