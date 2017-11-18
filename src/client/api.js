/**
 * Accessor functions for the back-end API.
 *
 * // TODO: Error handling
 *
 * @author mtownsend
 * @since Oct 2017
 */
import batchRequest from './batch-request';

const API_PATH = '/api';

function handleResponse(response) {
  return response.json().then(data => {
    return ({ status: response.status, data });
  });
}

/**
 * Posts data to an API endpoint
 * @param {string} endpoint - The path to which to POST
 * @param {string} token - The json web token authenticating this request
 * @param {object} data - The JSON data to POST
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function post(endpoint, token, data) {
  return batchRequest({
    method: 'POST',
    serverPath: API_PATH,
    endpoint,
    data,
    token
  });
}

/**
 * Gets data from an API endpoint
 * @param {string} endpoint - The path from which to GET
 * @param {string} token - The json web token authenticating this request
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function get(endpoint, token) {
  return batchRequest({
    method: 'GET',
    serverPath: API_PATH,
    endpoint,
    token
  });
}