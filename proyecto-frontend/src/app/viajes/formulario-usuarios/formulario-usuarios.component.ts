import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViajesComponent } from '../viajes.component';

@Component({
  selector: 'app-formulario-usuarios',
  standalone: true,
  imports: [CommonModule, ViajesComponent],
  templateUrl: './formulario-usuarios.component.html',
  styleUrl: './formulario-usuarios.component.css'
})
export class FormularioUsuariosComponent {

  AbrirFomulario(){
    const modal = document.getElementById("formulario-clientes")
    if (modal!= null) 
    modal.style.display="block";
  }
  cerrarFormulario(){
    const modal = document.getElementById("formulario-clientes")
    if (modal!= null) 
    modal.style.display="none";
  }

}
