import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-por-dia',
  standalone: true,
  imports: [],
  templateUrl: './lista-por-dia.component.html',
  styleUrl: './lista-por-dia.component.css'
})
export class ListaPorDiaComponent implements OnInit{

 
  ngOnInit(): void {
    this.EstadoPredeterminado();
    
  }

  EstadoPredeterminado(){
    const modal = document.getElementById("ListaRDia")
      if (modal!= null) 
      modal.style.display="none";
  }

  abrirLista(){
      const modal = document.getElementById("ListaRDia")
      if (modal!= null) 
      modal.style.display="block";
    }

  }




