const authorRoutes = require('express').Router();
const author = require('../controllers/author');

authorRoutes.route('/')
  .get(author.list)
  .post(author.create);
  
authorRoutes.route('/:id')
  .get(author.get)
  .patch(author.edit)
  .delete(author.remove)

module.exports = authorRoutes;
