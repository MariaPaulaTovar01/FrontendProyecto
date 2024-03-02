import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../entities/reserva';

@Component({
  selector: 'app-consultar-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-reserva.component.html',
  styleUrl: './consultar-reserva.component.css'
})
export class ConsultarReservaComponent implements OnInit {

  muestra: Reserva[]
  ngOnInit(): void {
    this.muestra = [{
      "destino":"medellin",
      "fecha":"2024/10/10",
      "hora": "10",
      "valor":"2000"
    }]
  }

  AbrirFomulario(){
    const modal = document.getElementById("consultar")
    if (modal!= null) 
    modal.style.display="block";
  }
  cerrarFormulario(){
    const modal = document.getElementById("consultar")
    if (modal!= null) 
    modal.style.display="none";
  }
  
  confirmarEliminarReserva(){
    const modal = document.getElementById("confirmar")
    if (modal!= null) 
    modal.style.display="block";
  }
  cerrarConfirmacion(){
    const modal = document.getElementById("confirmar")
    if (modal!= null) 
    modal.style.display="none";
  }

}
