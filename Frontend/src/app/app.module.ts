import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginStateService } from './components/login/store/login.state.service';
import { LoginStateModule } from './components/login/store/login.state.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    HttpClientModule,
    ScrollingModule,
    LoginStateModule,
    RouterModule
  ],

  providers: [LoginStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
