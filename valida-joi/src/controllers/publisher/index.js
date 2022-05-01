const create = require('./createPublisherController');
const remove = require('./deletePublisherController');
const edit = require('./editPublisherController');
const list = require('./listPublisherController');

module.exports = {
  create,
  remove,
  edit,
  list
}