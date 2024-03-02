import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Administrador } from '../entities/administrador';
import { RouterOutlet } from '@angular/router';
import { ListaPorDiaComponent } from './lista-por-dia/lista-por-dia.component';
import { ListaPorBusComponent } from './lista-por-bus/lista-por-bus.component';
import { ViajesComponent } from '../viajes/viajes.component';
import { BuscarViajeComponent } from '../usuarios/buscar-viaje/buscar-viaje.component';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [ FormsModule, 
    CommonModule,RouterOutlet, 
    ListaPorDiaComponent, 
    ListaPorBusComponent,
  ViajesComponent,
  BuscarViajeComponent ],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})

export class AdministradorComponent implements OnInit{
 administrador : Administrador;
 validacion: boolean;

constructor() {
  this.validacion = true;
  this.administrador = new Administrador;
 }

  ngOnInit(): void {
    this.mostrarElementos();
    this.MostrarAdm();
  }

  mostrarElementos(){
    if(this.validacion == true){
    const modal = document.getElementById("indexAdm")
      if (modal!= null) 
      modal.style.display="block";

      const modal2 = document.getElementById("logIn")
      if (modal2!= null) 
      modal2.style.display="none";
    }
  }

  MostrarAdm(){
    if(this.validacion != true){
      
      const modal = document.getElementById("indexAdm")
      if (modal!= null) 
      modal.style.display="none";

      const modal2 = document.getElementById("logIn")
      if (modal2!= null) 
      modal2.style.display="block";
    }
  }

}
