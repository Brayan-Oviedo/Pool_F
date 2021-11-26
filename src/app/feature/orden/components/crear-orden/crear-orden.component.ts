import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SwalService } from '@core/services/swal.service';
import { Orden } from '@orden/shared/model/orden';
import { OrdenService } from '@orden/shared/service/orden.service';
import { FechaService } from '@shared/services/fecha.service';
import { Ticket } from '@ticket/shared/model/ticket';
import * as moment from 'moment';
import { TicketDialogComponent } from 'src/app/feature/ticket/component/ticket-dialog/ticket-dialog.component';

const DIGITOS_MINIMOS_IDENTIFICACION_CLIENTE = 10;
const NUMERO_MAXIMO_TIEMPO_EXTRA = 20;

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  ordenForm: FormGroup;
  clienteForm: FormGroup;
  orden: Orden;

  constructor(
    protected formBuilder: FormBuilder,
    protected ordenService: OrdenService,
    protected dialogo: MatDialog,
    protected swalService: SwalService,
    protected fechaService: FechaService
  ) { }

  ngOnInit(): void {

    this.crearFormularios();
  }

  crear() {
    this.obtenerOrdenDelFormulario();
    this.ordenService.crear(this.orden).subscribe(
      ticket => {
        this.swalService.exitoso('Orden creada', '');
        this.mostrarTicket(ticket);
      }
    );
  }

  private mostrarTicket(ticket: Ticket) {
    this.dialogo.open(TicketDialogComponent, { data: ticket }).afterClosed()
      .subscribe(() => {
        this.crearFormularios();
      });
  }


  private obtenerOrdenDelFormulario() {
    this.orden = this.ordenForm.value;
    this.orden.cliente = this.clienteForm.value;
    this.orden.cliente.fechaNacimiento = this.fechaService.formatearFechaSinHora(moment(this.orden.cliente.fechaNacimiento).toDate());
  }


  private crearFormularios() {
    this.ordenForm = this.formBuilder.group({
      tiempoExtra: [0, [Validators.required, Validators.max(NUMERO_MAXIMO_TIEMPO_EXTRA)]]
    });

    this.clienteForm = this.formBuilder.group({
      identificacion: ['', [Validators.required, Validators.minLength(DIGITOS_MINIMOS_IDENTIFICACION_CLIENTE)]],
      fechaNacimiento: [this.fechaService.obtenerFechaActual(), [Validators.required]]
    });
  }

}
