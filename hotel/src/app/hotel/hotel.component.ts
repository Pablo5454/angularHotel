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
  public viajero: Viajero; //Se declara viajero como de tipo Viajero

  public name = "";
  public surname = "";
  public idp = "";
  public dateIn = "";
  public dateOut = "";
  public room = "";

  constructor(){
    this.viajeros = [
      new Viajero("Begoña", "Begoñez", "23232", "20/12/2023", "23/12/2023", "23"),
      new Viajero("Bigoña", "Bigoñez", "985632", "20/12/2024", "23/12/2024", "2563"),
      new Viajero("Bagoña", "Bagoñez", "77232", "20/12/2025", "23/12/2025", "6653")
    ];
    this.viajero = new Viajero("", "", "", "", "", ""); //Se necesita definir la estructura de uno de ellos para poder crear uno ejecutando la funcion crearViajero
  }

  mostrarNuevoFormulario(){
    this.nuevo = true;
    this.editar = false;
  }

  botonAceptar(){
    if(this.editar==false){
      this.crearViajero()
    }else{
      // this.modificarViajero();
    }
  }

  botonCancelar(){
    this.nuevo = false;
    this.editar = true;
  }

  crearViajero(){
    this.viajero = new Viajero(this.name, this.surname, this.idp, this.dateIn, this.dateOut, this.room)
    this.viajeros.push(this.viajero);
    this.nuevo = false;
  }

  // activarEdicion(){
  //   this.nuevo = true;
  //   this.editar = true;
  //   this.posicion = parseInt(event);

  //   this.viajero = this.viajeros[this.posicion];
  // }

  // modificarViajero(){
  //   this.activarEdicion();


  // }

  // eliminarViajero(){
  //   this.nuevo = true;
  //   this.editar = true;
  //   alert(this.nuevo);
  //   this.posicion = parseInt(event);
  // }



}
