const publisherRoutes = require('express').Router();
const publisher = require('../controllers/publisher');

publisherRoutes.route('/')
  .get(publisher.list)
  .post(publisher.create);
  
publisherRoutes.route('/:id')
  .patch(publisher.edit)
  .delete(publisher.remove)

module.exports = publisherRoutes;
