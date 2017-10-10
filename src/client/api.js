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

function handleResponse(response) {
  return response.json().then(data => ({ status: response.status, data }));
}

/**
 * Posts data to an API endpoint
 * @param {string} endpoint - The path to which to POST
 * @param {object} data - The JSON data to POST
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function post(endpoint, token, data) {
  return fetch(`${API_PATH}${endpoint}`, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(handleResponse);
}

/**
 * Gets data from an API endpoint
 * @param {string} endpoint - The path from which to GET
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function get(endpoint, token) {
  return fetch(`${API_PATH}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Authorization': `bearer ${token}`,
      'Accept': 'application/json'
    }
  }).then(handleResponse);
}