import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateUpdateComponent, PostListComponent, PostPageComponent } from './components';

const routes: Routes = [
  {
    path:'',
    component: PostPageComponent,
    children : [
      {
        path:'post-list',
        component: PostListComponent
      },
      {
        path:'create',
        component: PostCreateUpdateComponent
      },
      {
        path:'edit/:id',
        component: PostCreateUpdateComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'post-list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
