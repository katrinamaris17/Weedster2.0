const mysql = require('mysql2');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'weedster_db',
  }).promise();
}
connection.connect();
module.exports = connection;
