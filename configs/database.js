
require('dotenv').config();
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qpwoei123',
  database: 'db_kopi_dev',
  multipleStatements: true,
});
module.exports = con;
