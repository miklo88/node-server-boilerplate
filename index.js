// heroku deployment. package json is already set up for it.
// .env in root directory.
require("dotenv").config();

const server = require("./api/server");

// localhost from .env file
const host = process.env.HOST;
// port 9000 front .env file
const port = process.env.PORT;
// IF YOU FORKED THIS FILE AND WANT TO RUN THE SERVER COMMENT OUT CODE ABOVE AND UNCOMMENT THESE NEXT TWO LINES
// const host = process.env.HOST || "localhost";
// const port = process.env.PORT || 9000;

// backend server port/host.
server.listen(port, () => {
  console.log(`\n*** Listening on http://${host}:${port} ***\n`);
});
