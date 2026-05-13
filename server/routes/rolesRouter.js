import { Router } from "express";
import rolesController from "../controllers/rolesController.js";

const rolesRouter = new Router();

rolesRouter.get("/get_roles", rolesController.getRoles);

export default rolesRouter;
