import express from "express";

import { authController } from "../../controllers/auth/auth.controller";

const router =express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.post('/forgot-password', authController.forgotPassword);

router.post('/forgot-password-update/:id/:token', authController.resetPassword);

export default router;
