const authorModel = require('../../models/authorModel');

const createAuthorService = async (author) => {
  const newAuthor = await authorModel.create(author);
  return newAuthor;
};

module.exports = createAuthorService;