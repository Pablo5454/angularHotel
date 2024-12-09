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
  public editar = false;

  constructor(){
    this.viajeros = [
      new Viajero("Begoña", "Begoñez", "23232", "20/12/2023", "23/12/2023", "23"),
      new Viajero("Bigoña", "Bigoñez", "985632", "20/12/2024", "23/12/2024", "2563"),
      new Viajero("Bagoña", "Bagoñez", "77232", "20/12/2025", "23/12/2025", "6653"),
      // new Viajero("Bogoña", "Bogoñez", "5532", "20/12/2026", "23/12/2026", "323")
    ];
  }

  mostrarNuevoFormulario(){
    this.nuevo = true;
    this.editar = false;
  }

  // aceptar(){
  //   if(this.editar==false){
  //     this.crearViajero()
  //   }else{
  //     this.modificarViajero();
  //   }
  // }

  // crearViajero(){
  //   this.Viajero = new Viajero(this.nombre, this.apellido, this.dni, this.fechaIngreso, this.fechaSalida, this.habitacion)
  //   this.viajeros.push(this.viajero);
  //   this.nuevo = false;
  // }

  // activarEdicion(){
  //   this.nuevo = true;
  //   this.editar = true;
  //   this.posicion = parseInt(event);

  //   this.viajero = this.viajeros[this.posicion];
  // }

  // modificarViajero(){
  //   activarEdicion();


  // }

  // eliminarViajero(){
  //   this.nuevo = true;
  //   this.editar = true;
  //   alert(this.nuevo);
  //   this.posicion = parseInt(event);
  // }



}
