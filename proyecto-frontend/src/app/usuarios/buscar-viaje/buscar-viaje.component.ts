import { Component, OnInit } from '@angular/core';
import { ViajesComponent } from '../../viajes/viajes.component';
import { FormularioUsuariosComponent } from '../../viajes/formulario-usuarios/formulario-usuarios.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Viaje } from '../../entities/viaje';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../entities/cliente';

@Component({
  selector: 'app-buscar-viaje',
  standalone: true,
  imports: [ViajesComponent,FormularioUsuariosComponent, FormsModule,ViajesComponent, CommonModule],
  templateUrl: './buscar-viaje.component.html',
  styleUrl: './buscar-viaje.component.css'
})
export class BuscarViajeComponent implements OnInit{
  destino: string;
  viajes: Viaje[];
  cliente : Cliente = new Cliente;
  ngOnInit(): void {
 
    }
  
  

  constructor(private usuariosservicio : UsuariosService){

  }

  AbrirFomulario(){
    const modal = document.getElementById("buscar_viaje")
    if (modal!= null) 
    modal.style.display="block";
  }
  cerrarFormulario(){
    const modal = document.getElementById("buscar_viaje")
    if (modal!= null) 
    modal.style.display="none";
  }
  AbrirFomularioUsuario(){
    const modal = document.getElementById("formulario-clientes")
    if (modal!= null) 
    modal.style.display="block";
  }
  cerrarFormularioUsuario(){
    const modal = document.getElementById("formulario-clientes")
    if (modal!= null) 
    modal.style.display="none";
  }
  
  mostrarViajes(destino : String ){
    this.usuariosservicio.BuscarDestino(destino).subscribe(dato =>{
      this.viajes = dato;
    });
  }
}
