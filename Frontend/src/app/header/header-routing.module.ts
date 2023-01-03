import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./components/header";

const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
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