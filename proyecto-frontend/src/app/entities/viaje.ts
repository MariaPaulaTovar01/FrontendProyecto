
import { Bus } from "./bus";

export class Viaje {
    id_viaje : number;
    id_bus : Bus;
    destino: string;
    hora: Date;
    fecha: Date;
    precio: number;
}
