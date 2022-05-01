const bookModel = require('../../models/bookModel');

const listBookService = async () => {
  const bookList = await bookModel.list();
  if (bookList.length < 1) throw new Error('Nenhum livro cadastrado.');
  return bookList;
};

module.exports = listBookService;