import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HotelComponent } from '../hotel/hotel.component';

@Component({
  selector: 'app-viajeros',
  templateUrl: './viajeros.component.html',
  styleUrls: ['./viajeros.component.scss']
})
export class ViajerosComponent {
  @Input() viajero: any;
  @Input() posicion: number = 0;
}
