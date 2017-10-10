/**
 * Routes for api calls. If this gets too big, split it into
 * separate files under an api/ directory.
 *
 * @author mtownsend
 * @since Oct 2017
 **/
import express from 'express';
import passport from 'passport';

import { isLoggedIn, configPassport } from './auth';

configPassport(passport);

const router = express.Router();

router.get('/test', isLoggedIn, (request, response) => {
  response.json({'data' : 'Butts'});
});

router.post('/auth', (request, response) => {
  passport.authenticate('local-login', function (err, user) {
    if (err) {
      return response.status(401).send(`{"error":"${err}"}`);
    }
    response.send(JSON.stringify(user));
  })(request, response);
});

router.use((request, response) => {
  response.status(404).send("{}");
});

export default router;