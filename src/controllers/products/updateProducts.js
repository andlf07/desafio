const { productService } = require("../../services/product.service");

const updateProducts = async (req, res) => {
  let response = {};
  let { id } = req.params;
  let data = req.payload;
  data.id = id;
  try {
    const updateProduct = await productService.update(data);
    response.statusCode = 200;
    response.data = updateProduct;
  } catch (error) {
    response.statusCode = 500;
    response.message = "SERVER_ERROR";
    response.error = error;
  }

  return res.response(response).code(response.statusCode);
};

module.exports = {
  updateProducts,
};
