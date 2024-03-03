import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from '../entities/viaje';
import { Cliente } from '../entities/cliente';
import { Reserva } from '../entities/reserva';

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

  private bdGuardarDatosCliente = "http://localhost:8080/ver/cliente/GuardarInfoCliente";
  GuardarDatosCliente(cliente :Cliente):Observable <Object>{
    console.log("llegué a la peticion");
    return this.httpClient.post<Object>(this.bdGuardarDatosCliente, cliente);
  }

  private bdRealizarReserva = "http://localhost:8080/ver/cliente/GuardarReserva";
  GuardaReserva(cedula : number,  id_viaje : Viaje):Observable<Reserva>{
    return this.httpClient.post<Reserva>(this.bdRealizarReserva, cedula, id_viaje);
  }


}
