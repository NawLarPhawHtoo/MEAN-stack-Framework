import { Post } from "src/app/shared/models/post.model";

export class AddPost {
  static readonly type = '[Post] Add';

  constructor(public payload: any) { }
}

export class GetPosts {
  static readonly type = '[Post] Get';
}

export class UpdatePost {
  static readonly type = '[Post] Update';

  constructor(public payload: any, public id: number) { }
}

export class DeletePost {
  static readonly type = '[Post] Delete';

  constructor(public id: number) { }
}

export class SetSelectedPost {
  static readonly type = '[Post] Set';

  constructor(public payload: Post) { }
}
