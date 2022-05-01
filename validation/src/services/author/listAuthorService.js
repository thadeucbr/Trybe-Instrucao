const authorModel = require('../../models/authorModel');

const listAuthorService = async () => {
  const authorList = await authorModel.list();
  if (authorList.length < 1) throw new Error('Nenhum autor cadastrado.');
  return authorList;
};

module.exports = listAuthorService;