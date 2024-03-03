import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../entities/reserva';
import { Viaje } from '../entities/viaje';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private httpClient: HttpClient ) {

  }

  private bdConsultarReserva = "http://localhost:8080/ver/cliente/ConsultarReserva"
  ConsultarReserva(cedula: number):Observable<Reserva[]>{
    return this.httpClient.post<Reserva[]>(this.bdConsultarReserva,cedula);
  }

  private bdCancelarReserva = "http://localhost:8080/ver/cliente/cancelar"
  CancelarReserva(cedula : number):Observable<any>{
    return this.httpClient.post(this.bdCancelarReserva, cedula);
  }
}
