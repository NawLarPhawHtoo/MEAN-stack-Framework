import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPosts } from 'src/app/components/posts/store/posts/post.state.action';
import { IPostStateModel } from 'src/app/components/posts/store/posts/post.state.model';
import { PostsState } from 'src/app/components/posts/store/posts/post.state';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  @Select(PostsState.getPostList) posts$: Observable<IPostStateModel[]>;

  @Input() post: any = [];
  public posts: Post[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPosts());

    this.posts$.subscribe((dist: any) => {
      this.posts = dist;
    })
  }
}
