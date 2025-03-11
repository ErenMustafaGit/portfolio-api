const parse = require("pg-connection-string").parse;
console.log("ENV PRODUCTION DATABASE");
const config = parse(process.env.DATABASE_URL);
console.log("[config host]", config.host);
console.log("[config port]", config.port);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
      ssl: false,
    },
    debug: false,
  },
});
