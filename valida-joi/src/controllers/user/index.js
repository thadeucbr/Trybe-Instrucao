const create = require('./createUserController');
const remove = require('./deleteUserController');
const edit = require('./editUserController');
const list = require('./listUserController');

module.exports = {
  create,
  remove,
  list,
  edit
}