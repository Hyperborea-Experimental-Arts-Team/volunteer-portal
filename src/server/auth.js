/**
 * Functions related to authorization and authentication.
 *
 * @author mtownsend
 * @since Oct 2017
 */

import { Strategy as LocalStrategy } from 'passport-local';
import jwt from 'jsonwebtoken';
import config from 'config';
import { get, authenticate } from './stores/user-store';

function nope(response) {
  return response.status(401).send('{}');
}

/**
 * Express middleware for authenticating API requests
 */
export function isLoggedIn(request, response, next) {
  if (!request.headers.authorization) {
    return nope(response);
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = request.headers.authorization.split(' ')[1];

  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return nope(response);
    }

    const userEmail = decoded.sub;

    // check if a user exists
    return get(userEmail).then(user => {
      if (!user) {
        return nope(response);
      }

      request.user = user;

      return next();
    });
  });
}

/**
 * Configures the passportjs instance
 * @param {object} passport - The passport instance
 */
export function configurePassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    get(email).then(user => done(user ? null : `Invalid user ${email}`, user));
  });

  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password'
  }, (email, password, done) => {
    authenticate(email, password).then(user => {
      if (!user) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';
        return done(error);
      }

      const payload = {
        // TODO: Probably should use a random id instead for security
        sub: user.email
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = user;

      return done(null, token, data);
    });
  }));
}