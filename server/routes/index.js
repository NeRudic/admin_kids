import { Router } from "express";
import familiesRouter from "./familiesRouter.js";

const router = new Router();

router.use("/families", familiesRouter);
// router.use("/story");
// router.use("/visits");

export default router;
