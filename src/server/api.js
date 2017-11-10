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

const router = express.Router();

function scrubUser(user) {
  const scrubbedUser = Object.assign({}, user);
  delete scrubbedUser.password;
  return scrubbedUser;
}

router.get('/test', isLoggedIn, (request, response) => {
  response.json({'data' : 'Butts'});
});

router.post('/login', (request, response) => {
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
});

router.get('/login', isLoggedIn, (request, response) => {
  response.json({
    success: true,
    user: scrubUser(request.user)
  });
});

router.post('/signup', (request, response) => {
  response.status(418).json({
    success: false,
    message: 'Not yet implemented'
  });
});

router.get('/events/:id?', isLoggedIn, (request, response) => {
  getEvent(request.params.id).then(events => response.json(events));
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;