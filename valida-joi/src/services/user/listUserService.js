const userModel = require('../../models/userModel');

const listUserService = async () => {
  const users = await userModel.list();
  return users;
}

module.exports = listUserService;