import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopPageComponent } from "./top-page/top-page.component";
import { TopPageRoutingModule } from "./top-page-routing.module";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PostStateModule } from "../posts/store/posts/post.state.module";
import { BannerComponent } from "./banner";
import { PostCardComponent } from "./post-card/post-card";
import { PostCardScrollListComponent } from "./post-card/post-card-scroll-list";
import { UserStateModule } from "../users/store/users/user.state.module";
import { SharedModule } from "src/app/shared/shared.module";

const COMPONENTS = [
  TopPageComponent,
  BannerComponent,
  PostCardComponent,
  PostCardScrollListComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TopPageRoutingModule,
    PostStateModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
})
export class TopPageModule { }
