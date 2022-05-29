const { config } = require("../../config");
const { getUser } = require("../controllers/users/getUser");
const { postUser } = require("../controllers/users/postUser");
const { postProfile } = require("../controllers/profile/postProfile");
const { getProfile } = require("../controllers/profile/getProfile");
const { updateProfile } = require("../controllers/profile/updateProfile");
const { getProducts } = require("../controllers/products/getProducts");
const { postProduct } = require("../controllers/products/postProduct");
const { updateProducts } = require("../controllers/products/updateProducts");
const { postProductBook } = require("../controllers/products/postProductBook");
const { login } = require("../controllers/login/postLogin");

const userRoute = [
  {
    method: "GET",
    path: `${config.API_VERSION}/users`,
    handler: getUser,
  },
  {
    method: "POST",
    path: `${config.API_VERSION}/users`,
    handler: postUser,
  },
  {
    method: "POST",
    path: `${config.API_VERSION}/profiles`,
    handler: postProfile,
  },
  {
    method: "GET",
    path: `${config.API_VERSION}/profiles/{id}`,
    handler: getProfile,
  },
  {
    method: "PUT",
    path: `${config.API_VERSION}/profiles/{id}`,
    handler: updateProfile,
  },
  {
    method: "GET",
    path: `${config.API_VERSION}/products`,
    handler: getProducts,
  },
  {
    method: "POST",
    path: `${config.API_VERSION}/products`,
    handler: postProduct,
  },
  {
    method: "POST",
    path: `${config.API_VERSION}/products/books`,
    handler: postProductBook,
  },
  {
    method: "PUT",
    path: `${config.API_VERSION}/products/{id}`,
    handler: updateProducts,
  },
  //Login
  {
    method: "POST",
    path: `${config.API_VERSION}/login`,
    options: {
      auth: false,
    },
    handler: login,
  },
];

module.exports = {
  userRoute,
};
