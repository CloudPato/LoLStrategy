import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Modals/Usuario';
import { Role } from 'src/app/Modals/role';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private listaUsuarios: Usuario[] = [
    {
      nombre: "carlos",
      apellido: "fuentes",
      edad: 25,
      correo: "car.fuen@gmail.com",
      username: "calfue",
      password: "pass",
      role: [{ id: 1, nombre: "administrador" }
      ]
    },
    {
      nombre: "juan",
      apellido: "bravo",
      edad: 20,
      correo: "jua.bra@gmail.com",
      username: "juabr",
      password: "pass",
      role: [{ id: 2, nombre: "usuario" }
      ]
    },
    {
      nombre: "pablo",
      apellido: "ruiz",
      edad: 23,
      correo: "pab.rui@gmail.com",
      username: "parui",
      password: "pass",
      role: [{ id: 3, nombre: "operforo" }
      ]
    }
  ];
  constructor() {}

  // Método para obtener la lista de usuarios
  obtener_lista_usuarios(): Usuario[] {
    return this.listaUsuarios;
  }

  // Método para obtener un usuario por su nombre de usuario
  obtener_info_usuario(username: string): Usuario | undefined {
    return this.listaUsuarios.find(usuario => usuario.username === username);
  }

  // Método para agregar un nuevo usuario con todos los campos
  addUsuario(nuevoUsuario: { username: string, password: string, nombre: string, apellido: string, edad: number, correo: string, role: string }) {
    const nuevoRoleId = this.listaUsuarios.length + 1; // Generar un id único para cada nuevo rol
    const usuario: Usuario = {
      username: nuevoUsuario.username,
      password: nuevoUsuario.password,
      nombre: nuevoUsuario.nombre,
      apellido: nuevoUsuario.apellido,
      edad: nuevoUsuario.edad,
      correo: nuevoUsuario.correo,
      role: [{ id: nuevoRoleId, nombre: nuevoUsuario.role }]  // Añadir el id al role
    };
    this.listaUsuarios.push(usuario);
  }
}