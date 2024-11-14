// Database connection file

const mysqlDatabase = require('mysql2/promise');

// Import and initialize Dotenv
const Dotenv = require('dotenv')
Dotenv.config()

const connection = mysqlDatabase.createPool({
    host: process.env.MYSQL_IPADDRESS,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = connection;