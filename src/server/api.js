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

router.get('/test', isLoggedIn, (request, response) => {
  response.json({'data' : 'Butts'});
});

router.post('/auth', (request, response) => {
  passport.authenticate('local-login', function (err, token, user) {
    if (err || !token) {
      return response.status(400).json({
        success: false,
        message: err && err.message
      });
    }
    return response.json({
      success: true,
      token,
      user
    });
  })(request, response);
});

router.get('/auth', isLoggedIn, (request, response) => {
  response.json({
    success: true,
    user: request.user
  });
});

router.get('/events', isLoggedIn, (request, response) => {
  getEvent().then(events => response.json(events));
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;