import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CrearOrdenComponent } from "./component/crear-orden/crear-orden.component";
import { OrdenComponent } from "./component/orden/orden.component";
import { OrdenRoutingModule } from "./orden-routing.module";

@NgModule({
    declarations: [
        OrdenComponent,
        CrearOrdenComponent
    ],
    imports: [
        OrdenRoutingModule,
        SharedModule
    ]
})
export class OrdenModule { }