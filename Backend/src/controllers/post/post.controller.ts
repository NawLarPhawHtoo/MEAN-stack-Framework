import { userService } from './../../services/user/user.service';
import autobind from 'autobind-decorator';

import { Response, Request } from 'express';

import { postService } from '../../services/post';

@autobind
class PostController {

async getAllPosts(req: Request, res: Response) {
    const posts = await postService.getPostList();
    return res.json({
      count: posts.length,
      data: posts
    });
  }

  async create(req: Request, res: Response) {
    const postData = req.body as any;

    const result = await postService.createPost(postData);

    res.json({
      message: 'Post created successfully',
      data: result
    });
  }

  async update(req: Request, res: Response) {
    const checkPost = await postService.getPostById(+req.params.id);

    if (!checkPost) {
      throw new Error('Post not found');
    }
    const postData = req.body as any;
    postData.id = +req.params.id;
    await postService.updatePost(postData);
    // res.end('true');
    res.json({
      message: 'Post updated successfully',
      data: postData
    });
  }

  async deletePost(req: Request, res: Response) {
    const post_id = +req.params.id;
    const postData = await postService.getPostById(post_id);
    console.log(postData);

    if (!postData) {
      throw new Error('Post is not found');
    }
    await postService.deletePostById(post_id);

    res.json({
      message: 'Post deleted successfully',
      data:postData
    })
  }
}

export const postController = new PostController();