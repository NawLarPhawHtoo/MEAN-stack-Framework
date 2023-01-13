import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCreateUpdateComponent, PostDeleteDialogComponent, PostListComponent, PostPageComponent } from './components';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PostStateModule } from './store/posts/post.state.module';
import { FooterComponent } from '../top-page/footer';

const COMPONENTS = [
  PostPageComponent,
  PostListComponent,
  PostCreateUpdateComponent,
  PostDeleteDialogComponent,
  // FooterComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PostStateModule
  ]
})
export class PostModule { }
