const create = require('./createAuthorController');
const remove = require('./deleteAuthorController');
const edit = require('./editAuthorController');
const get = require('./getAuthorController');
const list = require('./listAuthorController');

module.exports = {
  create,
  remove,
  edit,
  get,
  list
}