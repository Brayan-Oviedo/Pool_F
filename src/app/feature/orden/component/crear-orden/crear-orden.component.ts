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
  orden: Orden;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formularioOrden = this.formBuilder.group({
      identificacion: ['', Validators.minLength(10)],
      fechaNacimiento: [this.obtenerFechaActual()],
      tiempoExtra: [0, Validators.max(20)]
    });
  }

  crear() {
    this.orden = this.formularioOrden.value;
  }


  private obtenerFechaActual(): Date{
    return new Date(moment().format('YYYY-MM-DD'));
  }

}
