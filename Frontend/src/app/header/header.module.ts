import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { BannerComponent } from './components/banner';
import { HeaderComponent } from './components/header';

const COMPONENTS = [
    HeaderComponent,
    BannerComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
      CommonModule,
      AngularMaterialModule
    ]
  })

export class HeaderModule { }