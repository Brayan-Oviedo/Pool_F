import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Orden } from '@orden/shared/model/orden';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  formularioOrden: FormGroup;
  formularioCliente: FormGroup;
  orden: Orden;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.crearFormularioOrden();
  }

  crear() {
    this.orden = this.formularioOrden.value;
    this.orden.cliente = this.formularioCliente.value;
    this.orden.cliente.fechaNacimiento = this.formatearFecha(new Date(this.orden.cliente.fechaNacimiento));
    
  }

  private crearFormularioOrden() {
    this.formularioOrden = this.formBuilder.group({
      tiempoExtra: [0, Validators.max(20)]
    });

    this.formularioCliente = this.formBuilder.group({
      identificacion: ['', Validators.minLength(10)],
      fechaNacimiento: [this.obtenerFechaActual()]
    });
  }


  private obtenerFechaActual(): string {
    return this.formatearFecha(moment().toDate());
  }

  private formatearFecha(fecha: Date) {
    let fechaNueva = moment(fecha).format('YYYY-MM-DD');
    return fechaNueva;
  }

}
