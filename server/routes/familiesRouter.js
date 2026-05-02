import { Router } from "express";
import familiesController from "../controllers/familiesController.js";
import { FamilySchema, FindFamilySchema } from "../schemas/familySchema.js";
import { validate } from "../middlewares/validate.middleware.js";

const familiesRouter = new Router();

familiesRouter.post(
  "/create_family",
  validate(FamilySchema),
  familiesController.createFamily,
);

familiesRouter.get(
  "/find_families",
  validate(FindFamilySchema),
  familiesController.findFamily,
);

export default familiesRouter;
