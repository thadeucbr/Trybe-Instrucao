const bookRoutes = require('./book.routes');
const userRoutes = require('./user.routes');
const authorRoutes = require('./author.routes')
const publisherRoutes = require('./publisher.routes');

const routes = require('express').Router()

routes.use('/book', bookRoutes);
routes.use('/user', userRoutes);
routes.use('/author', authorRoutes);
routes.use('/publisher', publisherRoutes);

module.exports = routes;