import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    HttpClientModule,
    ScrollingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
