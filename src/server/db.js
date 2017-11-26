var mysql     =    require('mysql');

// URL of the MySQL server. We expect that the DB is listening on the
// default port (3306).
//
const DB_HOST = 'heavenly';
const DB_USER = 'nyanCat';
const DB_PASSWD = 'P!b2BtW8AarP'; // Must match value in createSchema.sql
const DB_SCHEMA = 'nyanPortal';

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASSWD,
    database : DB_SCHEMA,
    debug    : false
});

/* This wrapper converts the callback-based MySQL entry points to Promises
 * that resolve to DB rows if the query was completed successfully.
 */
 
export function dbQuery(queryStr) {
    
    console.log("DB QUERY:");
    console.log(queryStr);
    
    var connect = new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection) {
            if (err) {
    			reject(new Error("Failed to obtain a database connection: " + err))
            }
            resolve(connection);
        });
    });
    
    return connect.then( 
        // Presuming the connection succeeded...
        connection => new Promise((resolve, reject) => {
            connection.query(queryStr, function(err,rows) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log("DB QUERY RESULT:");
                    console.log(rows);
                    resolve(rows);
                }
                connection.release();
            });
            connection.on('error', err => reject(err));
        }), 
        // However, if it failed...
        failure => { 
            console.error(failure);
            return Promise.reject(failure);
        });
    
}