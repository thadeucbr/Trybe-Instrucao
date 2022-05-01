const connection = require('../configs/connection');

const create = async (data) => {

};

const remove = async (id) => {

}

const edit = async ({id, name, phone, email, password }) => {
  
}
const list = async () => {
  const [users] = await connection.query('SELECT * FROM users');
  return users;
};

module.exports = {
  list
}