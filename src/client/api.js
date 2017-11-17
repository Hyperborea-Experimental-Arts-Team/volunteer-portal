/**
 * Accessor functions for the back-end API.
 *
 * // TODO: Error handling
 *
 * @author mtownsend
 * @since Oct 2017
 */
import fetch from 'isomorphic-fetch';

const API_PATH = '/api';

function handleResponse(response) {
  return response.json().then(data => {
    return ({ status: response.status, data });
  });
}

////// TODO: Split this into its own batched-fetch module
const WINDOW = 200;
let _requests = [];
let _timeout = null;

function handleBatchResponse(response, requests) {
  return response.json().then(data => {
    requests.forEach(req => {
      const subresponse = JSON.parse(data[req.endpoint]);
      req.resolve(subresponse);
    });
  });
}

function batchedRequest(method, endpoint, token, data) {
  const request = {
    method,
    endpoint,
    data
  };

  _requests.push(request);
  if (_timeout !== null) {
    clearTimeout(_timeout);
  }

  return new Promise((resolve, reject) => {
    request.resolve = resolve;

    // Wait a bit to see if there are more requests coming
    _timeout = setTimeout(() => {
      if (_requests.length === 1) {

        // Just one request in our window, so just send it normally
        const req = _requests[0];
        _requests.length = 0;
        resolve(fetch(`${API_PATH}/${req.endpoint}`, {
          method: req.method,
          headers: {
            'Authorization': `bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req.data)
        }).then(r => {
          return handleResponse(r);
        }));
      }
      else {
        // Multiple requests, so batch them up
        // Copy the _requests list so that any further requests don't mess us up
        const requests = _requests.slice();
        _requests.length = 0;
        fetch(`${API_PATH}/batch`, {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ requests })
        }).then(r => {
          handleBatchResponse(r, requests);
        });
      }
    }, WINDOW);
  });
}
//////

/**
 * Posts data to an API endpoint
 * @param {string} endpoint - The path to which to POST
 * @param {object} data - The JSON data to POST
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function post(endpoint, token, data) {
  return batchedRequest('POST', endpoint, token, data);
}

/**
 * Gets data from an API endpoint
 * @param {string} endpoint - The path from which to GET
 * @returns {Promise.<object>} A promise resolving to JSON response data
 */
export function get(endpoint, token) {
  return batchedRequest('GET', endpoint, token)
}