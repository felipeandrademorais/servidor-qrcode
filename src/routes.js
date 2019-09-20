const express = require("express");
const UrlController = require("./controller/UrlController");

const routes = express.Router();

routes.post("/url", UrlController.store);
routes.get("/:id", UrlController.show);

module.exports = routes;
