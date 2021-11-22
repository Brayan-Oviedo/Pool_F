import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Ticket } from 'src/app/feature/ticket/shared/model/ticket';
import { environment } from 'src/environments/environment';
import { Orden } from '../model/orden';

@Injectable()
export class OrdenService {

  constructor(protected http: HttpService) { }

  public crear(orden: Orden) {
    return this.http.doPost<Orden, Ticket>(`${environment.endpoint}/ordenes`, orden,
                                            this.http.optsName('crear orden'));
  }

  public obtenerOrdenePorCliente(identificacionCliente: string) {
    return this.http.doGet<Orden[]>(`${environment.endpoint}/ordenes/cliente/${identificacionCliente}`, )
  }

  public eliminar(orden: Orden) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${orden.id}`,
                                                 this.http.optsName('eliminar orden'));
  }
}