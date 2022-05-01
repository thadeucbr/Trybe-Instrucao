const connection = require('./connection');

const create = async (book) => {
  const { title, price, description, pageNumber, inStock, imagePath, genre, authorId } = book;
  const query = `INSERT INTO books 
  (title, price, description, pageNumber, inStock, imagePath, genre, authorId) 
  VALUES (? , ? , ? , ?, ?, ?, ?, ? )`; 
  const [newBook] = await connection.query(query, 
    [title, price, description, pageNumber, inStock, imagePath, genre, authorId]);
  return newBook;
};

const edit = async (book) => {
  const { id, title, price, description, pageNumber, inStock, imagePath, genre, authorId } = book;
  const query = `UPDATE books 
  SET title = ?, price = ?, description = ?, pageNumber = ?, 
  inStock = ?, imagePath = ?, genre = ?, authorId = ?
  WHERE id = ?`;
  const [result] = await connection.query(query, 
    [title, price, description, pageNumber, inStock, imagePath, genre, authorId, id]);
  return result;
};

const list = async () => {
  const [bookList] = await connection.query('SELECT * FROM books');
  return bookList;
};

module.exports = {
  create,
  edit,
  list,
};