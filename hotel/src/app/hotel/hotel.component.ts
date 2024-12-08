import { Component } from '@angular/core';
import { Viajero } from '../models/viajero';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  public viajeros: Array<Viajero>;
  public nuevo = false;

  constructor(){
    this.viajeros = [
      new Viajero("Begoña", "Begoñez", "23232", "20/12/2023", "23/12/2023", "23"),
      new Viajero("Bigoña", "Bigoñez", "985632", "20/12/2024", "23/12/2024", "2563"),
      new Viajero("Bagoña", "Bagoñez", "77232", "20/12/2025", "23/12/2025", "6653"),
      new Viajero("Bogoña", "Bogoñez", "5532", "20/12/2026", "23/12/2026", "323")
    ];
  }
}
