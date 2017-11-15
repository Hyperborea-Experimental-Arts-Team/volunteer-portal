/**
 * Routes for api calls. If this gets too big, split it into
 * separate files under an api/ directory.
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import express from 'express';
import passport from 'passport';

import { isLoggedIn } from './auth';
import { get as getEvent } from './stores/event-store';
import { getAll as getDepartments } from './stores/department-store';

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
  }]
];

POSTS.forEach(config => router.post(...config));
GETS.forEach(config => router.get(...config));

router.post('/batch', isLoggedIn, (request, response) => {
  const responseMap = request.body.requests.reduce((ret, subrequest) => {
    ret[subrequest.endpoint] = {
      status: 501,
      data: 'Not implemented'
    };
    return ret;
  }, {});
  response.json(responseMap);
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;