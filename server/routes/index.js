import { Router } from "express";
import familiesRouter from "./familiesRouter.js";
import rolesRouter from "./rolesRouter.js";

const router = new Router();

router.use("/families", familiesRouter);
router.use("/roles", rolesRouter);
// router.use("/story");
// router.use("/visits");

export default router;
