import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-por-bus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-por-bus.component.html',
  styleUrl: './lista-por-bus.component.css'
})
export class ListaPorBusComponent {

  AbrirConsulta(){
    const modal = document.getElementById("listaRBus")
    if (modal!= null) 
    modal.style.display="block";
  }
  CerrarConsulta(){
    const modal = document.getElementById("listaRBus")
    if (modal!= null) 
    modal.style.display="none";
  }
}
