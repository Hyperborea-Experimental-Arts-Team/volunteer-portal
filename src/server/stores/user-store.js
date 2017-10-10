/**
 * User Store
 *
 * TODO: Make it real.
 *
 * @author mtownsend
 * @since Oct 2017
 */
import bcrypt from 'bcrypt-nodejs';

const fakeStore = {
  'butts@butts.com': {
    email: 'butts@butts.com',
    password: hash('buttsRgr8')
  }
};

function hash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

function validate(password, user) {
  return bcrypt.compareSync(password, user.password);
}

/**
 * Gets a user from the store.
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise.<object|null>} Promise resolving to the user, or null if one cannot be found
 */
export function getUser(email, password) {
  const user = fakeStore[email];

  if (!user || !validate(password, user)) {
    return Promise.resolve(null);
  }

  return Promise.resolve({ email: user.email });
}

/**
 * Looks a user up by email.
 * @param {string} email - User's email address
 * @returns {Promise.<object|null>} Promise resolving to the user, or null if one cannot be found
 */
export function findUser(email) {
  const user = fakeStore[email];
  return Promise.resolve(user ? { email: user.email } : null);
}