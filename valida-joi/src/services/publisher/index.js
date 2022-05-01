const create = require('./createPublisherService');
const remove = require('./deletePublisherService');
const edit = require('./editPublisherService');
const list = require('./listPublisherService');

module.exports = {
  create,
  remove,
  edit,
  list
}