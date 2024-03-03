import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Viaje } from '../entities/viaje';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { BuscarViajeComponent } from '../usuarios/buscar-viaje/buscar-viaje.component';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, FormularioUsuariosComponent, BuscarViajeComponent],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css'
})
export class ViajesComponent {


  }




