import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '@cliente/shared/model/cliente';
import { Orden } from '@orden/shared/model/orden';

@Component({
  selector: 'app-orden-tarjeta',
  templateUrl: './orden-tarjeta.component.html',
  styleUrls: ['./orden-tarjeta.component.css']
})
export class OrdenTarjetaComponent implements OnInit {

  @Input() orden: Orden = new Orden(1, 2, new Cliente('123', '2001-06-27'));

  constructor() { }

  ngOnInit(): void {
  }

}
