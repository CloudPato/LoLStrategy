import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modals/Usuario';
import { UsuariosService } from 'src/app/Services/usuarios/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Declara una variable para almacenar los datos del usuario autenticado.
  usuario: Usuario | undefined;

  // Constructor donde se inyectan dependencias:
  // - Router: para manejar la navegación entre páginas.
  // - UsuariosService: para acceder a la información del usuario desde el servicio.
  constructor(
    private router: Router,
    private _usuarioService: UsuariosService
  ) { }
  
  // Este método se ejecuta cuando el componente se inicializa.
  ngOnInit() {
    // Obtiene el 'username' de la navegación actual usando el servicio de enrutamiento de Angular.
    // 'extras?.state?.['usuario']' es donde se espera encontrar el nombre de usuario que se pasó al navegar a esta página.
    const username = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
    
    // Usa el servicio de usuarios para obtener los detalles del usuario basado en el 'username'.
    // Se almacena el resultado en la variable 'usuario'.
    this.usuario = this._usuarioService.obtener_info_usuario(username);
  }

  // Método que verifica si el usuario autenticado tiene el rol de administrador.
  obtenerAdministrador() {
    // Busca en los roles del usuario si alguno tiene el nombre 'administrador'.
    // Si lo encuentra, devuelve 'true', lo que permitirá que el usuario vea opciones de administrador.
    const esAdministrador = this.usuario?.role.some(rol => rol.nombre === 'administrador');
    return esAdministrador;
  }

  // Método para redirigir a la página de la lista de campeones.
  mostrarCampeones() {
    this.router.navigate(['/campeones-list']);  // Redirige al usuario a la página de lista de campeones.
  }
}