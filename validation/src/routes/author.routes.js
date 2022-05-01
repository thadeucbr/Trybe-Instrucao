const authorRouter = require('express').Router();
const authorController = require('../controllers/author');
const validateAuthor = require('../middlewares/validateAuthorMiddleware');

authorRouter.route('/')
  .post(validateAuthor, authorController.create)
  .get(authorController.list);

authorRouter.route('/:id')
  .put(validateAuthor, authorController.edit);

module.exports = authorRouter;