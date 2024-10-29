import { Component } from '@angular/core';
import { SupabaseService } from 'src/app/Services/supabase/supabase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  edad: number = 18; // debe tener 18 o ser mayor 
  email: string = '';
  id_rol: number = 3; //el rol asignado es usuario

  constructor(private supabaseService: SupabaseService) {}

  async register() {
    // Validar que la edad no sea nula
    if (this.edad === null) {
      console.error('La edad no puede ser nula');
      return; // Detén la ejecución si la edad no es válida
    }

    try {
      const user = await this.supabaseService.register(
        this.username,
        this.password,
        this.nombre,
        this.apellido,
        this.edad,
        this.email,
        this.id_rol
      );
      console.log('Registro exitoso:', user);
      // Redirigir o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error en el registro:', error);
      // Manejo del error (mostrar un mensaje al usuario)
    }
  }
}