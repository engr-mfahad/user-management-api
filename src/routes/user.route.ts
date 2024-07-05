import { Router } from "express";
import * as UserHandlers from "../controllers/user.controller";

const router: Router = Router();

router.post("/", UserHandlers.create);

router.get("/", UserHandlers.list);

router.get("/:id", UserHandlers.get);

router.delete("/:id", UserHandlers.purge);

export default router;
