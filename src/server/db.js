import mysql from 'mysql';
import config from 'config';

const pool      =    mysql.createPool({
    connectionLimit : config.db.maxConnections, 
    host     : config.db.host,
    user     : config.db.user,
    password : config.db.passwd,
    database : config.db.schema,
    debug    : false
});

/* This wrapper converts the callback-based MySQL entry points to Promises
 * that resolve to DB rows if the query was completed successfully.
 */
 
export function runQuery(queryStr) {
    
    const connect = new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection) {
            if (err) {
    			reject(new Error(`Failed to obtain a database connection: ${err}`));
            }
            resolve(connection);
        });
    });
    
    return connect.then( 
        // Presuming the connection succeeded...
        connection => new Promise((resolve, reject) => {
            connection.query(queryStr, function(err,rows) {
                connection.release();
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
            connection.on('error', err => reject(err));
        }), 
        // However, if it failed...
        failure => { 
            console.error(failure);
            return Promise.reject(failure);
        });
    
}