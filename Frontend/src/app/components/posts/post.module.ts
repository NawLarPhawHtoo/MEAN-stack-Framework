import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCreateUpdateComponent, PostListComponent, PostPageComponent } from './components';
import { AngularMaterialModule } from 'src/app/angular-material.module';

const COMPONENTS = [
  PostPageComponent,
  PostListComponent,
  PostCreateUpdateComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class PostModule { }
