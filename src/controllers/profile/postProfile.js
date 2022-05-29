const { profileService } = require("../../services/profile.service");

const postProfile = async (req, res) => {
  let response = {};
  let data = req.payload;

  try {
    const create = await profileService.create(data);
    response.statusCode = 201;
    response.data = create;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  postProfile,
};
