import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearOrdenComponent } from "./crear-orden/crear-orden.component";
import { OrdenComponent } from "./orden/orden.component";

const routes: Routes = [
  {
    path: '',
    component: OrdenComponent,
    children: [
      {
        path: '',
        redirectTo: '/orden/crear',
        pathMatch: 'full'
      },
      {
        path: 'crear',
        component: CrearOrdenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenRoutingModule { }