const authorService = require('../../services/author');

const editAuthorController = async (req, res) => {
  const { id } = req.params;
  const newAuthor = req.body;
  try {
    await authorService.edit({ id, ...newAuthor });
    return res.status(200).json({ id, ...newAuthor });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = editAuthorController;
