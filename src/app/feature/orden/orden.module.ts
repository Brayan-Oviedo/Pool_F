import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { OrdenRoutingModule } from "./orden-routing.module";
import { OrdenComponent } from "./orden/orden.component";

@NgModule({
    declarations: [
        OrdenComponent
    ],
    imports: [
        OrdenRoutingModule,
        SharedModule
    ]
})
export class OrdenModule { }