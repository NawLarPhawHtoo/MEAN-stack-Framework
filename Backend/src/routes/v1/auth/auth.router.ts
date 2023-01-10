import { Router } from "../../custom-router";

import { authController } from "../../../controllers/auth/auth.controller";

const router =new Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.post('/forgot-password', authController.forgotPassword);

router.post('/forgot-password-update/:id/:token', authController.resetPassword);

router.post('/change-password/:id/:token', authController.changePassword);

export const authRouter = router;
