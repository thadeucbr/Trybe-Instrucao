const userRoutes = require('express').Router();
const user = require('../controllers/user');

userRoutes.route('/')
  .post(user.create)
  .get(user.list)

userRoutes.route('/:id')
  .put(user.edit)
  .delete(user.remove)

module.exports = userRoutes;