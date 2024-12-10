import { Component, Input } from '@angular/core';
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

  public nombre = "";
  public apellido = "";
  public dni = "";
  public fechaIngreso = "";
  public fechaSalida = "";
  public habitacion = "";

  public posicion = 0;

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

  botonCancelar(){
    this.nuevo = false;
    this.editar = false;
  }

  eliminarViajero(event:any){

    this.posicion=parseInt(event);
    this.viajeros.splice(this.posicion,1);

  }

  activarEdicion(event:any){
    this.nuevo = true;
    this.editar = true;
    this.posicion = parseInt(event);

    this.nombre=this.viajeros[this.posicion].nombre;
    this.apellido=this.viajeros[this.posicion].apellido;
    this.dni=this.viajeros[this.posicion].dni;
    this.fechaIngreso=this.viajeros[this.posicion].fechaIngreso;
    this.fechaSalida=this.viajeros[this.posicion].fechaSalida;
    this.habitacion=this.viajeros[this.posicion].habitacion;

  }

  public crearViajero(){
    this.viajero = new Viajero(this.nombre, this.apellido, this.dni, this.fechaIngreso, this.fechaSalida, this.habitacion)
    this.viajeros.push(this.viajero);
    this.nuevo = false;
    this.editar = false;
  }

  public updateViajero(){
    this.viajeros[this.posicion] = new Viajero (this.nombre, this.apellido, this.dni, this.fechaIngreso, this.fechaSalida, this.habitacion);
    this.nuevo = false;
    this.editar = false;
  }

  public botonAceptar(){
    if(this.editar==false){
      this.crearViajero();
    }else{
      this.updateViajero();
    }
  }


}
