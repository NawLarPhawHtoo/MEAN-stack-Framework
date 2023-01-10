import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { POST } from 'src/app/shared/constants/post.constant';
import { GetPosts } from 'src/app/components/posts/store/posts/post.state.action';
import { IPostStateModel } from 'src/app/components/posts/store/posts/post.state.model';
import { PostsState } from 'src/app/components/posts/store/posts/post.state';
import { Post } from 'src/app/shared/models/post.model';


@Component({
  selector: 'return-card',
  templateUrl: './return-card.component.html',
  styleUrls: ['./return-card.component.scss']
})
export class ReturnCardComponent implements OnInit {

  @Select(PostsState.getPostList) posts$: Observable<IPostStateModel[]>;

  // @Input()  posts$: Observable<IPostStateModel[]>;
  @Input() post: any = [];


  public posts: Post[] = [];

  constructor(private store: Store) { }
  
  ngOnInit(): void {
  }
}
