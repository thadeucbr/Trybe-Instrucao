const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  password: 'thadeu12',
  host: 'database',
  database: 'livraria',
  user: 'root',
});

module.exports = connection;