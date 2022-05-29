const Jwt = require("@hapi/jwt");

exports.plugin = {
  name: "auth",
  register: async function (server, options) {
    await server.register(Jwt);

    server.auth.strategy("jwt_strategy", "jwt", {
      keys: "some_shared_secret",
      verify: {
        aud: "urn:audience:test",
        iss: "urn:issuer:test",
        sub: false,
        nbf: true,
        exp: true,
        maxAgeSec: 14400, // 4 hours
        timeSkewSec: 15,
      },
      validate: (artifacts, request, h) => {
        console.log(artifacts.decoded.payload);
        return {
          isValid: true,
          // credentials: { user: artifacts.decoded.payload.user }
        };
      },
    });

    server.auth.default("jwt_strategy");
  },
};
