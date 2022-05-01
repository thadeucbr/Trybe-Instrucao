const bookService = require('../../services/book');

const createBook = async (req, res) => {
  const book = req.body;
  const newBook = await bookService.create(book);
  book.id = newBook.insertId;
  res.status(201).json(book);
  return newBook;
};

module.exports = createBook;