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
    name: 'Pinchy McPinchface',
    avatar: 'pinchy.jpg',
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
 * Looks a user up by email.
 * @param {string} email - User's email address
 * @returns {Promise.<object|null>} Promise resolving to the user, or null if one cannot be found
 */
export function get(email) {
  if (!fakeStore.hasOwnProperty(email)) {
    return Promise.resolve(null);
  }
  return Promise.resolve(Object.assign({}, fakeStore[email]));
}

/**
 * Gets a user from the store, validating their password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise.<object|null>} Promise resolving to the user, or null if one cannot be found
 */
export function authenticate(email, password) {
  console.log(authenticate);
  return get(email).then(user => {
    if (!user || !validate(password, user)) {
      return Promise.resolve(null);
    }
    return Promise.resolve(user);
  });
}