const bookRouter = require('express').Router();
const bookController = require('../controllers/book');
const bookValidation = require('../middlewares/validateBookMiddleware');

bookRouter.route('/').post(bookValidation, bookController.create).get(bookController.list);
bookRouter.route('/:id').put(bookValidation, bookController.edit);

module.exports = bookRouter;