/**
 * Simple wrapper for a JSON request to the server
 *
 * @author mtownsend
 * @since Nov 2017
 */

function handleResponse(response) {
  return response.json().then(data => {
    return ({ status: response.status, data });
  });
}

export default ({ method, path, token, data }) =>
  fetch(path, {
    method,
    headers: {
      'Authorization': `bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(handleResponse);