const create = require('./createAuthorService');
const remove = require('./deleteAuthorService');
const edit = require('./editAuthorService');
const get = require('./getAuthorService');
const list = require('./listAuthorService');

module.exports = {
  create,
  remove,
  edit,
  get,
  list
}