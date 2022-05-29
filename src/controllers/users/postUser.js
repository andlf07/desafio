const { userService } = require("../../services/users.service");

const postUser = async (req, res) => {
  let response = {};
  let data = req.payload;

  try {
    const createUser = await userService.createUser(data);
    response.statusCode = 201;
    response.data = createUser;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  postUser,
};
