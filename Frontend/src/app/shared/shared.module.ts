import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
