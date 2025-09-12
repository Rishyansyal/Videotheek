const mysql = require('mysql2');
 
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Rishyan1!',
    database: process.env.DB_DATABASE || 'sakila',
    port: process.env.DB_PORT || 3306,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    multipleStatements: true
 
});
 
module.exports = pool;  