import { Role } from "./role";
export interface Usuario{
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    username: string;
    password: string;
    role:Role[]    
}