import { Router } from "../../custom-router";

import { categoryController } from "../../../controllers/category";

const router = new Router();

router.get('/all', categoryController.getAllCategories);

router.get('/find/:id', categoryController.findCategory);

router.post('/create', categoryController.create)

router.patch('/edit/:id', categoryController.update);

router.delete('/delete/:id', categoryController.deleteCategory);

export const categoryRouter = router;