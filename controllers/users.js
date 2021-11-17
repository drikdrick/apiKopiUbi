const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createPool(config);

connection.on('error', (err) => {
  console.error(err);
});
