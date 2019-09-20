const { Router } = require("express");
const UrlController = require("./controller/UrlController");

const routes = new Router();

routes.post("/url", UrlController.store);
routes.get("/:id", UrlController.show);

export default routes;
