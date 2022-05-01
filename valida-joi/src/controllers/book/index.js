const create = require('./createBookController');
const remove = require('./deleteBookController');
const edit = require('./editBookController');
const get = require('./getBookController');
const list = require('./listBookController');

module.exports = {
  create,
  remove,
  edit,
  get,
  list
}