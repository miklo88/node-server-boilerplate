const server = require("./api/server");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || "9000";

server.listen(port, () => {
  console.log(`Listening on http://${host}:${port}`);
});
