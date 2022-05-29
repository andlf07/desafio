const Hapi = require("@hapi/hapi");
const { userRoute } = require("../src/routes/users.routes");
const authStrategy = require("./helpers/jwt");
class Server {
  constructor(port = "3000", host = "127.0.0.1") {
    this.port = port;
    this.host = host;
  }

  //Init the server
  async init() {
    const server = Hapi.server({
      port: this.port,
      host: this.host,
      routes: {
        cors: true,
      },
    });
    server.route(userRoute);
    // await server.register(authStrategy);
    await server.start();
    return server;
  }

  //start and run the server
  async start() {
    let server = await this.init();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);

    return await server.start();
  }
}

module.exports = {
  Server,
};
