import { Post } from "src/app/shared/models/post.model";

export interface IPostStateModel {
  posts: Post[];
  selectedPost: Post | null;
}
