export interface Usuario {
    id: bigint;
    username: string;
    password: string; // Asegúrate de que las contraseñas estén encriptadas en la base de datos

}