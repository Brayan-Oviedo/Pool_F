import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { SwalService } from '@core/services/swal.service';
import { environment } from '../../../../environments/environment';
import { HTTP_ERRORES_CODIGO } from '../http-codigo-error';

@Injectable()
export class ManejadorError implements ErrorHandler {

  constructor(private swalService: SwalService) { }

  handleError(error: string | Error): void {
    const mensajeError = this.mensajePorDefecto(error);
    this.imprimirErrorConsola(mensajeError);
    this.mostrarErrorSwal(mensajeError);
  }

  private mensajePorDefecto(error) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET;
      }
      if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {
        return this.obtenerErrorHttpCode(error.status);
      }
    }
    return error;
  }

  private imprimirErrorConsola(mensaje): void {
    const respuesta = this.obtenerRespuesta(mensaje);
    if (!environment.production) {
      window.console.error('Error inesperado:\n', respuesta);
    }
  }

  private obtenerRespuesta(mensaje) {
    return {
      fecha: new Date().toLocaleString(),
      path: window.location.href,
      mensaje,
    };
  }

  private mostrarErrorSwal(mensaje): void {
    const respuesta = this.obtenerRespuesta(mensaje);
    this.swalService.error('Ocurrio un error', respuesta.mensaje.error.mensaje);
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA;
    }
    return HTTP_ERRORES_CODIGO[httpCode];
  }

}
