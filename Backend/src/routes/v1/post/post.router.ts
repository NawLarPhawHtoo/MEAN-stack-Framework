import { Router } from "../../custom-router";

import { postController } from "../../../controllers/post";


const router = new Router();

router.get('/top-posts', postController.getTopPosts)

router.get('/all', postController.getAllPosts);

router.get('/find/:id', postController.findPost);

router.post('/create', postController.create)

router.patch('/edit/:id', postController.update);

router.delete('/delete/:id', postController.deletePost);

export const postRouter = router;
