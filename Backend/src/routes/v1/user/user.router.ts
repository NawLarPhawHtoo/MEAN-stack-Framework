import { Router } from "express";

import { userController } from "../../../controllers/user";

const router = Router();

// router.get("/", userController.getAllUsers);

router.get("/all", (req, res) => userController.getAllUsers());

export const userRouter = router;
