import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Viajero } from '../models/viajero';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.scss']
})
export class ViajerosComponent {
  @Input() viajero: any;
  @Input() posicion: number = 0;

  @Output() eliminarViajero = new EventEmitter();
  @Output() activarEdicion = new EventEmitter();

  deleteViajero(){
    this.eliminarViajero.emit(this.posicion);
  }
  updateViajero(){
    this.activarEdicion.emit(this.posicion);
  }

  constructor() {}
}

