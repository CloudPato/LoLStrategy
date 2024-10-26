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

  usuario: Usuario | undefined;

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    const username = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
    const listaUsuarios = this.usuarioService.obtener_lista_usuarios();
    this.usuario = listaUsuarios.find(user => user.username === username);
  }

  obtenerAdministrador() {
    return this.usuario?.role.some(rol => rol.nombre === 'administrador');
  }

  mostrarUsuarios() {
    this.router.navigate(['/usuarios-list']);  // Redirige a la lista de usuarios
  }
}