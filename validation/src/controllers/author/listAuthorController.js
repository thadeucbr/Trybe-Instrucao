const authorService = require('../../services/author');

const listAuthorController = async (_req, res) => {
  try {
    const authorList = await authorService.list();
    return res.status(200).json(authorList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = listAuthorController;
