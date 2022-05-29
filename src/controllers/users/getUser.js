const { userService } = require("../../services/users.service");

const getUser = async (req, res) => {
  let response = {};

  try {
    const findUsers = await userService.findUsers();
    response.statusCode = 200;
    response.data = findUsers;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  getUser,
};
