import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Modals/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private lista_de_usuarios: Usuario[] = [
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
  constructor() { }

  public obtener_lista_usuarios(): Usuario[] {
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(username: string): Usuario | undefined {
    console.log(username)
    return this.lista_de_usuarios.find(usuario => username == usuario.username)
  }

}