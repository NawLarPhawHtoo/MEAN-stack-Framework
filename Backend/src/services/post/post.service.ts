// import { UserPostDbModel } from './../../database/models/user-post.model';
import { FindOptions } from "sequelize";

import { IPostModel, PostDbModel, UserDbModel } from "../../database";

class PostService {

  getPostList(options?: FindOptions): Promise<any> {
    return PostDbModel.findAndCountAll({
      // include: [{
      //   model: UserDbModel,
      //   as: 'user'
      //   // required: true
      // }],
      ...options
    }) as any;
  }
  async createPost(returnObj: Partial<IPostModel>): Promise<PostDbModel> {
    const createPost = await PostDbModel.create({ ...returnObj, created_at: new Date().toISOString() });
    return createPost;
  }
  async updatePost(returnObj: Partial<IPostModel>): Promise<any> {
    await PostDbModel.update(returnObj, {
      where: { id: returnObj.id as number }
    });
  }
  getPostById(post_id: number): Promise<any> {
    return PostDbModel.findOne({
      where: {
        id: post_id,
      }
    }) as any;
  }
  async deletePostById(id: number): Promise<any> {
    await PostDbModel.destroy(
      {
        where: { id },
      }
    );
  }
}
export const postService = new PostService();