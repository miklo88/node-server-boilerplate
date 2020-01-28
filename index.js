// heroku deployment. package json is already set up for it.
// .env in root directory.
require("dotenv").config();

const server = require("./api/server");

// const host = process.env.HOST || "localhost";
// const port = process.env.PORT || "9000";

const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n*** Listening on http://${host}:${port} ***\n`);
});
