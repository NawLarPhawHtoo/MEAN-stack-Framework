import { FindOptions } from "sequelize";

import { IPostModel, PostDbModel, UserDbModel, CategoryDbModel,TopPostsDbModel } from "../../database";

class PostService {

  getPostList(options?: FindOptions): Promise<any> {
    return PostDbModel.findAll({
      include: [
        {
          model: CategoryDbModel,
          as: 'category',
        },
        {
          model: UserDbModel,
          as: 'user'
        }],
      ...options
    }) as any;
  }

  async createPost(postObj: Partial<IPostModel>): Promise<PostDbModel> {
    const createPost = await PostDbModel.create({ ...postObj,created_at: new Date().toISOString() });
    return createPost;
  }

  async updatePost(post_id:number,postObj: Partial<IPostModel>): Promise<any> {
    await PostDbModel.update(postObj, {
      where: { id: post_id as number }
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

  getTopPostsAndCountAll(options: FindOptions): Promise<any> {
    return TopPostsDbModel.findAll({
      include: [{
        model: PostDbModel,
        as: 'post',
        include: [
          {
            model: CategoryDbModel,
            as: 'category',
          },
          {
            model: UserDbModel,
            as: 'user'
          }]
      }],
      order: [[{ model: PostDbModel, as: 'post' }, { model: UserDbModel, as: 'user' }, 'created_at', 'DESC']]
    }) as any;
  }
}
export const postService = new PostService();