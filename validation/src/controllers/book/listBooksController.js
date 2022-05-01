const bookService = require('../../services/book');

const listBookController = async (_req, res) => {
  try {
    const bookList = await bookService.list();
    return res.status(200).json(bookList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = listBookController;
