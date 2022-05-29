const { productService } = require("../../services/product.service");

const getProducts = async (req, res) => {
  let response = {};

  try {
    const getProducts = await productService.getProducts();
    response.statusCode = 200;
    response.data = getProducts;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  getProducts,
};
