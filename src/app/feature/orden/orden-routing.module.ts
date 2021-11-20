import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdenComponent } from "./orden/orden.component";

const routes: Routes = [
  {
    path: '',
    component: OrdenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenRoutingModule { }