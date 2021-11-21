import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ordenes',
  templateUrl: './listar-ordenes.component.html',
  styleUrls: ['./listar-ordenes.component.css']
})
export class ListarOrdenesComponent implements OnInit {


  titulo = 'Cliente';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerOrdenes(identificacion: string) {
    console.log(identificacion);
  }

}
