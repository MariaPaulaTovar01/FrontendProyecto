import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../entities/reserva';
import { ReservaService } from '../../servicios/reserva.service';
import { FormsModule } from '@angular/forms';
import { Viaje } from '../../entities/viaje';

@Component({
  selector: 'app-consultar-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar-reserva.component.html',
  styleUrl: './consultar-reserva.component.css'
})
export class ConsultarReservaComponent implements OnInit {
  cedula: number;
  reservas: Reserva[];
  ngOnInit(): void {
   
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

  constructor(private reservaservicio : ReservaService){

  }

  consultarReserva(){
    this.reservaservicio.ConsultarReserva(this.cedula).subscribe(dato =>{
      this.reservas = dato;
      console.log(dato);
    })
  }

    CancelarReserva(){
      this.reservaservicio.CancelarReserva(this.cedula).subscribe(dato =>{
        if(dato != null)
        this.reservas =dato;
      })
    }
  }


