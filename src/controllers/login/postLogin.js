const { token } = require("../../helpers/genToken");
const { prisma } = require("../../services/prisma.service");

const login = async (req, res) => {
  let response = {};
  let data = req.payload;

  try {
    const login = await prisma.user.findUnique({
      where: { email: req.payload.email },
    });
    if (login) {
      response.token = token;
    }
    response.statusCode = 200;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  login,
};
