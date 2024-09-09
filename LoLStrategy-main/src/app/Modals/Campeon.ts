import { Habilidad } from "./habilidad";
export interface Campeon{
    id: number|null;
    nombre: string;
    habilidad_base: string|null;
    descripcion: string;
    habilidad: Habilidad[]
}