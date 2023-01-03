const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
// NEW CLOUDINARY_URL=cloudinary://574312755381879:2ogrm2aEuhY63krbtWg0YFjjNpA@ceycloud
// cloudinary://123567726712929:kfFK747j1NSL7gd-pnXy1eEfH14@hjgwaqabt
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
