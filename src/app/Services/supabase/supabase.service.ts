import { Injectable } from '@angular/core';
import { SupabaseClient, createClient, } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  async login(username: string, password: string) {
    try {
      const { data, error } = await this.supabase
        .from('User')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }

  async register(username: string, password: string, nombre: string, apellido: string, edad: number, email: string, id_rol: number) {
    const { data, error } = await this.supabase
      .from('User')
      .insert([
        {
          username,
          password,
          nombre,
          apellido,
          edad,
          email,
          id_rol,
          created_at: new Date().toISOString(), // Asignar la fecha de creación actual
        },
      ]);

    if (error) {
      console.error('Error al registrar:', error);
      throw error; // Lanza el error para manejarlo en el componente
    }
    return data;
  }
  async registerUser(userData: { username: string; password: string; email: string; nombre: string; apellido: string; edad: number | null; id_rol: number }) {
    const { data, error } = await this.supabase
      .from('User')
      .insert([
        {
          username: userData.username,
          password: userData.password,
          email: userData.email,
          nombre: userData.nombre,
          apellido: userData.apellido,
          edad: userData.edad,
          id_rol: userData.id_rol,
        },
      ]);
  
    if (error) {
      throw error;
    }
  
    return data;
  }
}