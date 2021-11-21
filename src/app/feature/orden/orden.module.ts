import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CrearOrdenComponent } from "./component/crear-orden/crear-orden.component";
import { OrdenComponent } from "./component/orden/orden.component";
import { OrdenRoutingModule } from "./orden-routing.module";
import { OrdenService } from "./shared/service/orden.service";
import { OrdenTarjetaComponent } from './component/orden-tarjeta/orden-tarjeta.component';

@NgModule({
    declarations: [
        OrdenComponent,
        CrearOrdenComponent,
        OrdenTarjetaComponent
    ],
    imports: [
        OrdenRoutingModule,
        SharedModule
    ],
    providers: [OrdenService]
})
export class OrdenModule { }