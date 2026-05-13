import { Router } from "express";
import rolesController from "../controllers/rolesController";

const rolesRouter = new Router();

rolesRouter.get("/get_roles", rolesController.getRoles);

export default rolesRouter;
