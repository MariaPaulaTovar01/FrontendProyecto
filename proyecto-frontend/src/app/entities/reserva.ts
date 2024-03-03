import { Cliente } from "./cliente";
import { Viaje } from "./viaje";

export class Reserva {
    id_reserva : number;
    cedula: Cliente;
    id_viaje: Viaje;
    puesto_asignado: number;
    estado_De_Pago: boolean;
   fecha_de_reserva : Date;
}
