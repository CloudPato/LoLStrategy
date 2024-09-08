import { Injectable } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  // Inyecta el servicio UsuariosService para acceder a los datos de los usuarios.
  constructor(private _servicioUsuario: UsuariosService) { }

  // Método de autenticación que verifica si el nombre de usuario y la contraseña son correctos.
  autentificacion(username: string, password: string): Observable<boolean> {
    // Obtiene la lista de usuarios a través del servicio de usuarios.
    const usuarios = this._servicioUsuario.obtener_lista_usuarios();
    
    // Comprueba si existe un usuario con el nombre de usuario y la contraseña proporcionados.
    const usuarioExiste = usuarios.some(usuario => usuario.username === username && usuario.password === password);
    
    // Retorna un Observable con el resultado de la autenticación (true si el usuario existe, false si no).
    return of(usuarioExiste);  // Utiliza 'of' para crear un Observable<boolean> que emitirá el valor de 'usuarioExiste'.
  }
}