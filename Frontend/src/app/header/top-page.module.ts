import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TopPageComponent } from './components/top-page';
import { BannerComponent } from './components/banner';
import { HeaderComponent } from './components/header';
import { ReturnCardScrollListComponent } from './components/return/return-card-scroll-list';
import { ReturnCardComponent } from './components/return/return-card';
import { FooterComponent } from './components/footer';
const COMPONENTS = [
    TopPageComponent,
    HeaderComponent,
    BannerComponent,
    ReturnCardScrollListComponent,
    ReturnCardComponent,
    FooterComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
      CommonModule,
      AngularMaterialModule,
      ScrollingModule,
      AngularSvgIconModule
    ]
  })

export class TopPageModule { }