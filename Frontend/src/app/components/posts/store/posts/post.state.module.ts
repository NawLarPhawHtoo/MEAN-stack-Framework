import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { PostsState } from "./post.state";
import { PostStateService } from "./post.state.service";

@NgModule({
  imports: [NgxsModule.forRoot([PostsState])],
  providers: [ PostStateService]
})

export class PostStateModule { }
