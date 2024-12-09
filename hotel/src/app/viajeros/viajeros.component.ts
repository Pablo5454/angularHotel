import { Component } from '@angular/core';
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
  @Input() viajeros: Array<Viajero> = [];

  // @Input() viajero:Viajero = new Viajero("", "", '', '', '', '');
  
  constructor() {}
}

