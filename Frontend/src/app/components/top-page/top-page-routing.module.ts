import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from "./top-page/top-page.component";

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent,
    //children: [
    //  {
    //    path: 'top-page'
    //  }
    //]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopPageRoutingModule { }
