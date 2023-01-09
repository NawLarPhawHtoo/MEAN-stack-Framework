import { Post } from "src/app/shared/models/post.model";

export class AddPost {
    static readonly type = '[Post] Add';

    constructor(public payload: Post[]) { }
}

export class GetPosts {
    static readonly type = '[Post] Get';
}

export class UpdatePost {
    static readonly type = '[Post] Update';

    constructor(public payload: Post[], public id: number) { }
}

export class DeletePost {
    static readonly type = '[Post] Delete';

    constructor(public id: number) { }
}