import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios/usuarios.service';  // Asegúrate de que el servicio esté importado

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  // Variables para capturar los datos del formulario
  nombre: string = '';
  apellido: string = '';
  edad: number | null = null;
  correo: string = '';
  username: string = '';
  password: string = '';
  role: string = '';

  errorMessage: string = '';

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  // Método para crear un nuevo usuario
  crearUsuario(): void {
    // Validación básica de los campos
    if (!this.nombre || !this.apellido || !this.edad || !this.correo || !this.username || !this.password || !this.role) {
      this.errorMessage = "Todos los campos son obligatorios.";
      return;
    }

    // Validación de que el rol debe ser "ayudante de foro"
    if (this.role !== 'ayudante de foro' && this.role !== 'administrador') {
      this.errorMessage = "El rol debe ser 'ayudante de foro' o 'administrador'.";
      return;
    }

    // Agregar el nuevo usuario mediante el servicio
    this.usuariosService.addUsuario({
      username: this.username,
      password: this.password,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      correo: this.correo,
      role: this.role  // Asegúrate de que el rol sea el correcto
    });

    // Redirigir al usuario a la página de inicio o a otra página después de la creación
    this.router.navigate(['/home']);
  }
} 