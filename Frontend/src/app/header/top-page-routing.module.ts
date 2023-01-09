import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from "./components/top-page";
// import { HeaderComponent } from "./components/header";

const routes: Routes = [
    {
        path: '',
        component: TopPageComponent,
        children: [
            {
                path: '',
            }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HeaderRoutingModule { }