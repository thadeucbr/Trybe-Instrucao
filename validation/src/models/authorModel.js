const connection = require('./connection');

const create = async ({ name, age, email, isActive = 1 }) => {
  const query = 'INSERT INTO authors (name, age, email, isActive) VALUES (? , ? , ? , ? )';
  const [newAuthor] = await connection.query(query, [name, age, email, isActive]);
  return newAuthor;
};

const edit = async ({ id, name, age, email, isActive }) => {
  const query = 'UPDATE authors SET name = ?, age = ?, email = ?, isActive = ? WHERE id = ?';
  const [result] = await connection.query(query, [name, age, email, isActive, id]);
  return result;
};

const list = async () => {
  const query = 'SELECT * FROM authors';
  const [userList] = await connection.query(query);
  return userList;
};
module.exports = {
  create,
  edit,
  list,
};
