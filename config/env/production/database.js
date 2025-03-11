const parse = require("pg-connection-string").parse;
console.log("ENV PRODUCTION DATABASE");
const config = parse(process.env.DATABASE_URL);
console.log("[config host]", config.host);
console.log("[config port]", config.port);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
