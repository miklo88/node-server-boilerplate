// express and the middleware trio
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// authenticate, routers will be brought in here.
// chef router etc
// auth router etc

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server api GET
server.get("/", (req, res) => {
  res.send("hola and welcome to carls api!");
});
// sneak JWT Token on line 14. pushing down res.send message.

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ay dio mio we have an error."
  });
});

module.exports = server;
