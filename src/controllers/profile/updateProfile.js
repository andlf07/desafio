const { profileService } = require("../../services/profile.service");

const updateProfile = async (req, res) => {
  let response = {};
  let { id } = req.params;
  let data = req.payload;
  data.id = id;
  try {
    const updateProfile = await profileService.update(data);
    response.statusCode = 200;
    response.data = updateProfile;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  updateProfile,
};
