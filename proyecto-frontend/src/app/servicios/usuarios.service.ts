import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }


  private bdBuscarViaje = "http://localhost:8080/ver/cliente/BuscarDestinos"
}
