import { NgModule } from "@angular/core";
import { FeatureSharedModule } from "../shared/feature-shared.module";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./component/cliente/cliente.component";
import { ListarOrdenesComponent } from './component/listar-ordenes/listar-ordenes.component';
import { ClienteService } from "./shared/service/cliente.service";

@NgModule({
    declarations: [
        ClienteComponent,
        ListarOrdenesComponent
    ],
    imports: [
        ClienteRoutingModule,
        FeatureSharedModule
    ],
    providers: [ClienteService]
})
export class ClienteModule { }