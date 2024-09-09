import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/Services/autentificacion/autentificacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variables que representan los campos del formulario de inicio de sesión.
  username: string = "";  // Almacena el nombre de usuario ingresado.
  password: string = "";  // Almacena la contraseña ingresada.
  errorMessage: string = "";  // Almacena mensajes de error en caso de que ocurra un fallo en el inicio de sesión.

  // Inyección de dependencias en el constructor:
  // - _authService: Servicio de autenticación que se usa para verificar las credenciales del usuario.
  // - router: Servicio de enrutamiento para navegar a otras páginas.
  constructor(private _authService: AutentificacionService, private router: Router) { }

  // Método que se ejecuta al iniciar el componente. Se deja vacío aquí, ya que no se realiza ninguna acción inicial.
  ngOnInit() {
  }

  // Método que maneja el inicio de sesión del usuario.
  login(): void {
    // Validación: Verifica si los campos de nombre de usuario y contraseña no están vacíos.
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = "Se requieren nombre de usuario y contraseña.";  // Muestra un mensaje de error si faltan campos.
      return;  // Detiene la ejecución del método si falta información.
    }

    // Llama al servicio de autenticación para validar el nombre de usuario y la contraseña.
    this._authService.autentificacion(this.username, this.password).subscribe({
      // Si la autenticación es exitosa:
      next: (isAuthenticated: boolean) => {
        if (isAuthenticated) {
          console.info("Usuario Existe");  // Mensaje en consola para indicar que el usuario fue autenticado.
          // Redirige al usuario a la página de inicio ('home') y pasa el nombre de usuario en el estado de navegación.
          this.router.navigate(['home'], {
            state: {
              usuario: this.username
            }
          });
        } else {
          console.error("Usuario No existe");  // Mensaje en consola para indicar que el usuario no fue autenticado.
          this.errorMessage = "El usuario o la contraseña es incorrecta.";  // Muestra un mensaje de error si la autenticación falla.
        }
      },
      // En caso de error en la llamada al servicio:
      error: (err) => {
        console.error("Error durante la autenticación:", err);  // Mensaje en consola para indicar un error durante la autenticación.
        this.errorMessage = "Se produjo un error durante el inicio de sesión. Inténtalo nuevamente.";  // Mensaje de error genérico para mostrar al usuario.
      }
    });
  }
}
