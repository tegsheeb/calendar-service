var mysql = require('mysql');
var config = require('../config.js');

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: config.PW,
  database: 'airbnb'
});