import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Viaje } from '../entities/viaje';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule, FormularioUsuariosComponent],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css'
})
export class ViajesComponent implements OnInit{

  viajes: Viaje[];
  ngOnInit(): void {
    
    this.viajes=[{
      "destino":"medellin",
      "fecha":"12/02",
      "hora": "3:00:00",
      "id_bus": "12345",
      "id_viaje": "1222",
      "precio": "20000"
    }]
  }

}
