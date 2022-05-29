require("dotenv").config();

const config = {
  SERVER_PORT: process.env.SERVER_PORT | "3000",
  SERVER_HOST: process.env.SERVER_HOST,
  API_VERSION: "/v1",
};

module.exports = {
  config,
};
