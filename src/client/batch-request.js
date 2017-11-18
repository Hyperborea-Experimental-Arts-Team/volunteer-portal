/**
 * Batches up requests that occur within a time window.
 * The server replays the requests locally, and sends back
 * a batched response. Reduces round-trips while still
 * allowing each component to define its own data requirements.
 *
 * @author mtownsend
 * @since Nov 2017
 */
import simpleRequest from './request';

const WINDOW = 20;
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

export default ({ method, serverPath, endpoint, token, data }) => {
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

        resolve(simpleRequest({
          method: req.method,
          path: `${serverPath}/${req.endpoint}`,
          data: req.data,
          token
        }));
      }
      else {
        // Multiple requests, so batch them up
        // Copy the _requests list so that any further requests don't mess us up
        const requests = _requests.slice();
        _requests.length = 0;
        fetch(`${serverPath}/batch`, {
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