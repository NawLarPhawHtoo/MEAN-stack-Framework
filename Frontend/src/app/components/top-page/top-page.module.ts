import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopPageComponent } from "./top-page/top-page.component";
import { TopPageRoutingModule } from "./top-page-routing.module";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PostStateModule } from "../posts/store/posts/post.state.module";
import { HeaderComponent } from "./header";
import { BannerComponent } from "./banner";
import { FooterComponent } from "./footer";
import { ReturnCardComponent } from "./post-card/return-card";
import { ReturnCardScrollListComponent } from "./post-card/return-card-scroll-list";
import { PostCardComponent } from "./post-card/post-card";
import { PostCardScrollListComponent } from "./post-card/post-card-scroll-list";
import { UserStateModule } from "../users/store/users/user.state.module";

const COMPONENTS = [
  TopPageComponent,
  HeaderComponent,
  BannerComponent,
  PostCardComponent,
  PostCardScrollListComponent,
  ReturnCardComponent,
  ReturnCardScrollListComponent,
  FooterComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TopPageRoutingModule,
    PostStateModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    //  TopPageComponent
    HeaderComponent,
    FooterComponent,
  ]
})
export class TopPageModule { }
