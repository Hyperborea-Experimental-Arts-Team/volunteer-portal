/**
 * Routes for api calls. If this gets too big, split it into
 * separate files under an api/ directory.
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import express from 'express';
import passport from 'passport';
import config from 'config';

import { isLoggedIn } from './auth';
import { getById as getEvent } from './stores/event-store';
import { getAll as getDepartments } from './stores/department-store';
import { getById as getUser } from './stores/user-store';
import fetch from 'isomorphic-fetch';

const HOST = 'localhost';

const router = express.Router();

function scrubUser(user) {
  const scrubbedUser = Object.assign({}, user);
  delete scrubbedUser.password;
  return scrubbedUser;
}

const POSTS = [
  ['/login', (request, response) => {
    passport.authenticate('local-login', function (err, token, user) {
      if (err || !token) {
        return response.status(401).json({
          success: false,
          message: err && err.message
        });
      }
      return response.json({
        success: true,
        token,
        user: scrubUser(user)
      });
    })(request, response);
  }],

  ['/signup', (request, response) => {
    response.status(418).json({
      success: false,
      message: 'Not yet implemented'
    });
  }]
];

const GETS = [
  ['/test', isLoggedIn, (request, response) => {
    response.json({'data' : 'Butts'});
  }],

  ['/login', isLoggedIn, (request, response) => {
    response.json({
      success: true,
      user: scrubUser(request.user)
    });
  }],

  ['/events/:id?', isLoggedIn, (request, response) => {
    getEvent(request.params.id).then(events => response.json(events));
  }],

  ['/events/:id/departments', isLoggedIn, (request, response) => {
    getDepartments(request.params.id).then(departments => response.json({ departments }));
  }],

  ['/events/:id/lead', isLoggedIn, (request, response) => {
    getEvent(request.params.id)
        .then(event => getUser(event.lead))
        .then(lead => response.json(lead));
  }]
];

POSTS.forEach(config => router.post(...config));
GETS.forEach(config => router.get(...config));

// TODO: Reuse the fetch code from the client when code sharing happens
function handleResponse(response) {
  return response.json().then(data => {
    return ({ status: response.status, data });
  });
}

router.post('/batch', (request, response) => {

  // TODO: Reuse the fetch code from the client when code sharing happens
  // TODO: Also, it would be more efficient if it didn't actually fire new http requests
  // TODO: Also, it should consolidate duplicate calls
  const subrequests = request.body.requests.map(subrequest => fetch(
    `http://${HOST}:${config.get('server.port')}/api/${subrequest.endpoint}`,
    {
      method: subrequest.method,
      headers: {
        'Authorization': request.headers.authorization,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subrequest.data)
    }
  ).then(r => {
    return handleResponse(r).then(data => ({
      [subrequest.endpoint]: JSON.stringify(data)
    }));
  }));

  Promise.all(subrequests).then(responses => {
    const data = responses.reduce((ret, subresponse) =>
        Object.assign(ret, subresponse), {});
    response.json(data);
  });
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;
