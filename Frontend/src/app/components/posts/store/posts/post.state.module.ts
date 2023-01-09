import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './post.state';
import { PostStateService } from './post.state.service';

@NgModule({
    imports: [NgxsModule.forRoot([PostState])],
    providers: [PostStateService]
})

export class PostStateModule { }