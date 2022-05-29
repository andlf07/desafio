const { profileService } = require("../../services/profile.service");

const getProfile = async (req, res) => {
  let response = {};
  let { id } = req.params;

  try {
    const findProfile = await profileService.getProfile(id);
    response.statusCode = 200;
    response.data = findProfile;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  getProfile,
};
