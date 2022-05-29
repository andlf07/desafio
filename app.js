const { Server } = require("./src/server");

//Can add parameters to Server instance port by default port = 3000 and host = 127.0.0.1
const app = new Server();

app.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
