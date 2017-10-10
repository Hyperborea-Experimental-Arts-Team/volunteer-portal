/**
 * Functions related to authorization and authentication.
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { Strategy as LocalStrategy } from 'passport-local';
import { getUser, findUser } from './stores/user-store';

/**
 * Express middleware for authenticating API requests
 */
export function isLoggedIn(request, response, next) {

  if (request.isAuthenticated()) {
    return next();
  }

  response.status(401).send("{}");
}

/**
 * Configures the passportjs instance
 * @param {object} passport - The passport instance
 */
export function configPassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    findUser(email).then(user => done(user ? null : `Invalid user ${email}`, user));
  });

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
  }, (email, password, done) => {
    getUser(email, password).then(user => {
      return done(user ? null : `Invalid user ${email}:${password}`, user)
    });
  }));
}