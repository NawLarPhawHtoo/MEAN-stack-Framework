import { Router } from "../../custom-router";

import { userController } from "../../../controllers/user";


const router =new Router();

router.get('/',userController.getAllUsers);

router.post('/',  userController.create)

router.patch('/:id', userController.update);

router.delete('/:id', userController.deleteUser);

export const userRouter = router;
