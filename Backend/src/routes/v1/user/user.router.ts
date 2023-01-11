import { Router } from "../../custom-router";

import { userController } from "../../../controllers/user";

const router = new Router();

router.get('/all', userController.getAllUsers);

router.post('/create', userController.create)

router.patch('/edit/:id', userController.update);

router.delete('/delete/:id', userController.deleteUser);

router.get('/find/:id', userController.findUser);

router.post('/change-password/:id', userController.changePassword);

export const userRouter = router;
