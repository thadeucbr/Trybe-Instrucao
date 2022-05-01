const authorService = require('../../services/author');

const createAuthorController = async (req, res) => {
  const author = req.body;
  const newAuthor = await authorService.create(author);
  author.id = newAuthor.insertId;
  return res.status(201).json(author);
};

module.exports = createAuthorController;
