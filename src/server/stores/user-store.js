/**
 * User Store
 *
 * TODO: Make it real.
 *
 * @author mtownsend
 * @since Oct 2017
 */
import bcrypt from 'bcrypt-nodejs';
import { runQuery } from '../db';
import mysql from 'mysql';
import config from 'config';

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
    
    if(config.db.isMocked){
        if (!fakeStore.hasOwnProperty(email)) {
            return Promise.resolve(null);
        }
        return Promise.resolve(Object.assign({}, fakeStore[email]));
    }
    
    let query = "SELECT CONCAT(firstName,' ',lastName) AS name, photo AS avatar, email, password " +
                "FROM users WHERE email=?";
    const params = [email];
    query = mysql.format(query, params);
    
    return runQuery(query)
    .then(rows => {
        if (rows.length == 0) {
            return Promise.resolve(null);
        }

        // Copy from SQL RowDataPacket to generic object
        const user = Object.assign({}, rows[0]);
        user.password = String.fromCharCode(...user.password);

        return Promise.resolve(user);
    });
}

/**
 * Gets a user from the store, validating their password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise.<object|null>} Promise resolving to the user, or null if one cannot be found
 */
export function authenticate(email, password) {
  return get(email).then(user => {
    if (!user || !validate(password, user)) {
      return Promise.resolve(null);
    }
    return Promise.resolve(user);
  });
}