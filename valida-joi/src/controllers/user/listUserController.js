const { list } = require('../../services/user')

const listUserController = async (req, res) => {
  const userList = await list();
  res.status(200).json(userList)
}

module.exports = listUserController;