import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostsState } from 'src/app/components/posts/store/posts/post.state';
import { IPostStateModel } from 'src/app/components/posts/store/posts/post.state.model';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  public storageUrl = environment.storageUrl;

  @Select(PostsState.getPostList) posts$: Observable<IPostStateModel[]>;

  @Input() post: any = [];

  public posts: Post[] = [];

  constructor(private store: Store) { }
  
  ngOnInit(): void {
  }
}
