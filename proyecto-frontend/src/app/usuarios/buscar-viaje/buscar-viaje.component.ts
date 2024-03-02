import { Component } from '@angular/core';
import { ViajesComponent } from '../../viajes/viajes.component';
import { FormularioUsuariosComponent } from '../../viajes/formulario-usuarios/formulario-usuarios.component';

@Component({
  selector: 'app-buscar-viaje',
  standalone: true,
  imports: [ViajesComponent,FormularioUsuariosComponent],
  templateUrl: './buscar-viaje.component.html',
  styleUrl: './buscar-viaje.component.css'
})
export class BuscarViajeComponent {

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
}
