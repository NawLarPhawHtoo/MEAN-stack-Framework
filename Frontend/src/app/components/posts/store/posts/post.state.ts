import { Injectable } from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AddPost, GetPosts, UpdatePost, DeletePost, SetSelectedPost } from './post.state.action';
import { IPostStateModel } from './post.state.model';
import { PostStateService } from './post.state.service';

@State<IPostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    selectedPost: null
  }
})

@Injectable()

export class PostsState {

  constructor(private postService: PostStateService) { }

  @Selector()
  static getPostList(state: IPostStateModel) {
    return state.posts;
  }

  @Selector()
  static getSelectedPost(state: IPostStateModel) {
    return state.selectedPost;
  }

  @Action(GetPosts)
  getPosts({ getState, setState }: StateContext<IPostStateModel>) {
    return this.postService.getPost().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        posts: result.data,
      });
    }));
  }

  @Action(AddPost)
  addUser({getState, patchState}: StateContext<IPostStateModel>, {payload}: AddPost) {
      return this.postService.createPost(payload).pipe(tap((result) => {
          const state = getState();
          patchState({
              posts: [...state.posts, result]
          });
      }));
  }

  @Action(UpdatePost)
  updateUser({getState, setState}: StateContext<IPostStateModel>, {payload, id}: UpdatePost) {
      return this.postService.updatePost(payload, id).pipe(tap((result) => {
          const state = getState();
          const postList = [...state.posts];
          const postIndex = postList.findIndex(item => item.id === id);
          postList[postIndex] = result;
          setState({
              ...state,
              posts: postList,
          });
      }));
  }

  @Action(DeletePost)
  deleteUser({getState, setState}: StateContext<IPostStateModel>, {id}: DeletePost) {
      return this.postService.deletePost(id).pipe(tap(() => {
          const state = getState();
          const filteredArray = state.posts.filter((item:any) => item.id !== id);
          setState({
              ...state,
              posts: filteredArray,
          });
      }));
  }

  @Action(SetSelectedPost)
  setSelectedUserId({getState, setState}: StateContext<IPostStateModel>, {payload}: SetSelectedPost) {
      const state = getState();
      setState({
          ...state,
          selectedPost: payload
      });
  }
}
