const { productService } = require("../../services/product.service");

const postProduct = async (req, res) => {
  let response = {};
  let data = req.payload;

  try {
    const create = await productService.create(data);
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
  postProduct,
};
