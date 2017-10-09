/**
 * Accessor functions for the back-end API.
 *
 * // TODO: Authentication and error handling
 *
 * @author mtownsend
 * @since Oct 2017
 */
import fetch from 'isomorphic-fetch';

const API_PATH = 'api/';

/**
 * Posts data to an API endpoint
 * @param {string} endpoint - The path to which to POST
 * @param {object} data - The JSON data to POST
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function post(endpoint, data) {
  return fetch(`${API_PATH}${endpoint}`, {
    //credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  }).then(response => response.json());
}

/**
 * Gets data from an API endpoint
 * @param {string} endpoint - The path from which to GET
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function get(endpoint) {
  return fetch(`${API_PATH}/${endpoint}`, {
    //credentials: 'include',
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.json());
}