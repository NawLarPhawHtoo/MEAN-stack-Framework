import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopPageComponent } from "./top-page/top-page.component";
import { TopPageRoutingModule } from "./top-page-routing.module";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { HeaderComponent } from "./header";
import { BannerComponent } from "./banner";
import { FooterComponent } from "./footer";

const COMPONENTS = [
  TopPageComponent,
  HeaderComponent,
  BannerComponent,
  FooterComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TopPageRoutingModule
  ]
})
export class TopPageModule { }