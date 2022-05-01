const bookModel = require('../../models/bookModel');

const editBookService = async (book) => {
  const { changedRows } = await bookModel.edit(book);
  if (changedRows === 0) throw new Error('Nenhum livro foi atualizado.');
};

module.exports = editBookService;
