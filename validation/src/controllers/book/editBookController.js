const bookService = require('../../services/book');

const editBookController = async (req, res) => {
  const { id } = req.params;
  const newBook = req.body;
  try {
    await bookService.edit({ id, ...newBook });
    return res.status(200).json({ id, ...newBook });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = editBookController;
