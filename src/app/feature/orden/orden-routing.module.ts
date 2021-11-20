import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearOrdenComponent } from "./component/crear-orden/crear-orden.component";
import { OrdenComponent } from "./component/orden/orden.component";

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