const connection = require('../configs/connection');

const create = async (data) => {

};

const remove = async (id) => {

}

const edit = async ({ id, name }) => {
  
}

const get = async (id) => {
  
}

const list = async () => {
  const [author] = await connection.query('SELECT * FROM authors');
  return author;
};

module.exports = {
  list
}