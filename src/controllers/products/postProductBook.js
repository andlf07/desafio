const { productService } = require("../../services/product.service");

const postProductBook = async (req, res) => {
  let response = {};
  let data = req.payload;

  try {
    const create = await productService.createBook(data);
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
  postProductBook,
};
