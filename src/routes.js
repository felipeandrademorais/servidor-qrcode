import { Router } from "express";
import UrlController from "./controller/UrlController";

const routes = new Router();

routes.post("/url", UrlController.store);
routes.get("/:id", UrlController.show);

export default routes;
