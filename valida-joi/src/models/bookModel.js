const connection = require('../configs/connection');

const create = async (data) => {

};

const remove = async (id) => {

}

const edit = async ({ id, name, price, description, publisherId, authorId }) => {
  
}

const get = async (id) => {
  
}

const list = async () => {
  const [book] = await connection.query('SELECT * FROM books');
  return book;
};

module.exports = {
  list
}