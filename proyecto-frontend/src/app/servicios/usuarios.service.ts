import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../entities/viaje';
import { Cliente } from '../entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  
  constructor(private httpClient : HttpClient) {

   }


  private bdBuscarViaje = "http://localhost:8080/ver/cliente/BuscarDestino";


   BuscarDestino(destino: String): Observable<Viaje[]>{
    return this.httpClient.post<Viaje[]>(this.bdBuscarViaje, destino);
   }

  private bdGuardarDatosCliente = "http://localhost:8080/ver/cliente/GuardarInfoCliente"

  GuardarDatosCliente(c :Cliente){
    return this.httpClient.post(this.bdGuardarDatosCliente, c);
  }
}
