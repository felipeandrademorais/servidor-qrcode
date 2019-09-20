import express from "express";
import routes from "./routes";
const cors = require("cors");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(cors());
    this.server.use(routes);
  }
}

module.exports = new App().server;
