import { Router } from "../../custom-router";

import { postController } from "../../../controllers/post";


const router =new Router();

router.get('/top-posts',postController.getTopPosts)

router.get('/',postController.getAllPosts);

router.post('/', postController.create)

router.patch('/:id', postController.update);

router.delete('/:id', postController.deletePost);

export const postRouter = router;
