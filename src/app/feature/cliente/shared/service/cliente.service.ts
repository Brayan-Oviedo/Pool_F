import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Orden } from '@orden/shared/model/orden';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) { }

  public obtenerOrdenesPorCliente(identificacionCliente: string) {
    return this.http.doGet<Orden[]>(`${environment.endpoint}/ordenes/cliente/${identificacionCliente}`, this.http.optsName('obtener ordenes del cliente'));
  }
}
