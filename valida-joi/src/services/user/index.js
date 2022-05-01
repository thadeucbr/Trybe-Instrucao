const create = require('./createUserService');
const remove = require('./deleteUserService');
const edit = require('./editUserService');
const list = require('./listUserService');

module.exports = {
  create,
  remove,
  edit,
  list
}