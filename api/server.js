const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const morgan = require("morgan");

// authenticate, routers will be brought in here.

const server = express();

server.use(helmet());
server.use(cors());
// server.use(morgan());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hola and welcome to carls api!");
});
// sneak JWT Token on line 14. pushing down res.send message.

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ay dio mio we have an error. have fun debugging."
  });
});

module.exports = server;
