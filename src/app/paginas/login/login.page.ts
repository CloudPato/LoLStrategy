import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Services/supabase/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private supabaseService: SupabaseService, private router: Router) {}


  async login() {
    // Validar campos
    if (!this.username || !this.password) {
      console.error('Por favor, ingrese un nombre de usuario y una contraseña.');
      // Aquí puedes mostrar un mensaje al usuario en la interfaz
      return; // Salir si no se cumplen las condiciones
    }

    try {
      const user = await this.supabaseService.login(this.username, this.password);
      
      // Verificar si el usuario se ha autenticado correctamente
      if (user) {
        console.log('Login exitoso:', user);
        // Redirigir al usuario a la página de inicio
        this.router.navigate(['/home']);
      } else {
        console.error('Nombre de usuario o contraseña incorrectos.');
        // Aquí puedes mostrar un mensaje al usuario en la interfaz
      }
    } catch (error) {
      console.error('Error en el login:', error);
      // Muestra un mensaje de error al usuario
    }
  }
}
