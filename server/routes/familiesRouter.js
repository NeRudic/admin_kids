import { Router } from "express";
import familiesController from "../controllers/familiesController.js";
import { FamilySchema } from "../config/schemas/familySchema.js";
import { validate } from "../config/middlewares/validate.middleware.js";

const familiesRouter = new Router();

familiesRouter.post(
  "/create_family",
  validate(FamilySchema),
  familiesController.createFamily,
);

export default familiesRouter;
