const { config } = require("./config");
const { Server } = require("./src/server");

const { SERVER_PORT, SERVER_HOST } = config;

const app = new Server();

app.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
