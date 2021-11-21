import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./component/cliente/cliente.component";
import { ListarOrdenesComponent } from './component/listar-ordenes/listar-ordenes.component';

@NgModule({
    declarations: [
        ClienteComponent,
        ListarOrdenesComponent
    ],
    imports: [
        ClienteRoutingModule,
        SharedModule
    ]
})
export class ClienteModule { }