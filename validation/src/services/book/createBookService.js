const bookModel = require('../../models/bookModel');

const createBook = async (book) => {
  const newBook = await bookModel.create(book);
  return newBook;
};

module.exports = createBook;