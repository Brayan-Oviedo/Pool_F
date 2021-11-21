import { Component, OnInit } from '@angular/core';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-listar-ordenes',
  templateUrl: './listar-ordenes.component.html',
  styleUrls: ['./listar-ordenes.component.css']
})
export class ListarOrdenesComponent implements OnInit {


  titulo = 'Cliente';
  ordenes = of([]);

  constructor(protected clienteServicio: ClienteService) { }

  ngOnInit(): void {
  }

  obtenerOrdenes(identificacion: string) {
    this.ordenes = this.clienteServicio.obtenerOrdenesPorCliente(identificacion);
  }

}
