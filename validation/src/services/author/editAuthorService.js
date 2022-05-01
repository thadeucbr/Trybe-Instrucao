const authorModel = require('../../models/authorModel');

const editAuthorService = async (author) => {
  const { changedRows } = await authorModel.edit(author);
  if (changedRows === 0) throw new Error('Nenhum autor foi atualizado.');
};

module.exports = editAuthorService;
