import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  constructor() { }

  obtenerFechaActual() {
    return moment().toDate();
  }

  formatearFechaSinHora(fecha: Date) {
    const formato = 'YYYY-MM-DD'
    let fechaNueva = moment(fecha);
    return fechaNueva.format(formato);
  }

  formatearFechaConHora(fecha: Date) {
    const formato = 'YYYY-MM-DD HH:mm:ss';
    let fechaNueva = moment(fecha);
    return fechaNueva.format(formato);
  }
}
