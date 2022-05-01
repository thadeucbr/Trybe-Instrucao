const bookRoutes = require('express').Router();
const book = require('../controllers/book');

bookRoutes.route('/')
  .get(book.list)
  .post(book.create);
  
bookRoutes.route('/:id')
  .get(book.get)
  .put(book.edit)
  .delete(book.remove)

module.exports = bookRoutes;
