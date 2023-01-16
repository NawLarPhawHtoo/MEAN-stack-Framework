import autobind from 'autobind-decorator';

import { Response, Request } from 'express';

import { postService } from '../../services/post';

import { IPostModel } from '../../database';

import { POSTS_DEFAULT_LIMIT } from '../../utils/constant';

@autobind
class PostController {

  async getTopPosts(req: Request, res: Response) {
    const options = {
      limit: req.query.limit ? +req.query.limit : POSTS_DEFAULT_LIMIT,
      offset: req.query.offset ? +req.query.offset : 0
    };

    const topPosts = await postService.getTopPostsAndCountAll(options);
    return res.json({
      count: topPosts.length || 0,
      data: topPosts,
      pageCount: options.limit && Math.ceil(topPosts.length || 0 / options.limit)
    });
  }

  async getAllPosts(req: Request, res: Response) {
    const posts = await postService.getPostList();
    return res.json({
      count: posts.length,
      data: posts
    });
  }

  async create(req: any, res: Response) {

    let image: string = req.body.image;
    if (req.files?.image?.length > 0) {
      image = req.files?.image[0]?.path.replaceAll("\\", "/");
    }
    const postData: IPostModel = {
      category_id: req.body.category_id,
      created_user_id: req.body.created_user_id,
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
      author: req.body.author,
      references: req.body.references,
      image: image,
    } as any;

    const result = await postService.createPost(postData);

    res.json({
      message: 'Post created successfully',
      data: result
    });
  }

  async update(req: any, res: Response) {
    const id = +req.params.id
    const checkPost = await postService.getPostById(id);

    if (!checkPost) {
       return res.status(404).send("Post not found");
    }

    let image: string = req.body.image;
    if (req.files?.image?.length > 0) {
      image = req.files.image[0].path.replace("\\", "/");

      if (image) {
        checkPost.image = image;
      }
    }

    const postData: IPostModel = {
      category_id: req.body.category_id,
      created_user_id: req.body.created_user_id,
      title: req.body.title,
      content: req.body.content,
      description: req.body.description,
      author: req.body.author,
      references: req.body.references,
      image: image
    } as any;

    postData.id = +req.params.id;
    await postService.updatePost(id, postData);

    res.json({
      message: 'Post updated successfully',
      data: postData
    });
  }

  async deletePost(req: Request, res: Response) {
    const post_id = +req.params.id;
    const postData = await postService.getPostById(post_id);

    if (!postData) {
      throw new Error('Post is not found');
    }
    await postService.deletePostById(post_id);

    res.json({
      message: 'Post deleted successfully',
      data: postData
    })
  }

  async findPost(req: Request, res: Response) {
    const post_id = +req.params.id;
    const postData = await postService.getPostById(post_id);

    res.json({
      message: 'Find Post successfully',
      data: postData
    })
  }
}

export const postController = new PostController();