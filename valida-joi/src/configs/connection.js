const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'thadeu12',
  database: 'livraria'
});

module.exports = connection;