import { Router } from "../../custom-router";

import { categoryController } from "../../../controllers/category";

const router = new Router();

router.get('/', categoryController.getAllCategories);

router.post('/', categoryController.create)

router.patch('/:id', categoryController.update);

router.delete('/:id', categoryController.deleteCategory);

export const categoryRouter = router;