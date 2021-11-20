import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CrearOrdenComponent } from "./crear-orden/crear-orden.component";
import { OrdenRoutingModule } from "./orden-routing.module";
import { OrdenComponent } from "./orden/orden.component";

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