import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/Services/autentificacion/autentificacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private _authService: AutentificacionService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = "Se requieren nombre de usuario y contraseña.";
      return;
    }

    this._authService.autentificacion(this.username, this.password).subscribe({
      next: (isAuthenticated: boolean) => {
        if (isAuthenticated) {
          console.info("Usuario Existe");
          this.router.navigate(['home'], {
            state: {
              usuario: this.username
            }
          });
        } else {
          console.error("Usuario No existe");
          this.errorMessage = "El usuario o la contraseña es incorrecta.";
        }
      },
      error: (err) => {
        console.error("Error durante la autenticación:", err);
        this.errorMessage = "Se produjo un error durante el inicio de sesión. Inténtalo nuevamente.";
      }
    });
  }

  // Nuevo método para navegar a la página de registro
  navigateToRegister(): void {
    this.router.navigate(['registrarse']);
  }
}