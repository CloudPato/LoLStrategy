import { Component, OnInit } from '@angular/core';
import { CampeonService } from '../Services/campeon/campeon.service';
import { Campeon } from '../Modals/Campeon';
import { Habilidad } from '../Modals/habilidad';
@Component({
  selector: 'app-agregar-habilidades',
  templateUrl: './agregar-habilidades.component.html',
  styleUrls: ['./agregar-habilidades.component.css']
})
export class AgregarHabilidadesComponent implements OnInit {
  // Define un objeto `campeon` que representa un campeón con sus propiedades.
  campeon: Campeon = {
    id: null,            // ID del campeón (puede ser nulo cuando se crea un nuevo campeón).
    nombre: '',          // Nombre del campeón.
    habilidad_base: null, // Habilidad base del campeón (puede ser nula inicialmente).
    descripcion: '',     // Descripción del campeón.
    habilidad: []        // Lista de habilidades asociadas al campeón.
  };

  // Define un objeto `nuevaHabilidad` para almacenar temporalmente la habilidad que se está agregando.
  nuevaHabilidad: Habilidad = {
    id: null,            // ID de la habilidad (puede ser nulo cuando se crea una nueva habilidad).
    nombre: '',          // Nombre de la habilidad.
    descripcion: null    // Descripción de la habilidad (puede ser nula inicialmente).
  };

  // Constructor del componente donde se inyecta el servicio CampeonService para interactuar con la lógica de negocio de los campeones.
  constructor(private campeonService: CampeonService) { }

  // Hook del ciclo de vida del componente que se ejecuta cuando el componente se inicializa.
  ngOnInit(): void {
    // Si es necesario, puedes inicializar algún dato del campeón aquí.
  }

  // Método que agrega una nueva habilidad a la lista de habilidades del campeón.
  agregarHabilidad(): void {
    // Verifica si el nombre de la nueva habilidad no está vacío.
    if (this.nuevaHabilidad.nombre) {
      // Si el nombre no está vacío, agrega la nueva habilidad a la lista de habilidades del campeón.
      this.campeon.habilidad.push(this.nuevaHabilidad);
      
      // Resetea el objeto `nuevaHabilidad` para poder agregar otra habilidad posteriormente.
      this.nuevaHabilidad = {
        id: null,            // Resetea el ID de la habilidad.
        nombre: '',          // Resetea el nombre de la habilidad.
        descripcion: null    // Resetea la descripción de la habilidad.
      };
    } else {
      // Si el nombre de la habilidad está vacío, muestra un mensaje de error en la consola.
      console.error('El nombre de la habilidad es obligatorio');
    }
  }

  // Método que finaliza el proceso de agregar habilidades y envía los datos del campeón al servicio.
  finalizarAgregacion(): void {
    // Verifica si el nombre y la descripción del campeón no están vacíos.
    if (this.campeon.nombre && this.campeon.descripcion) {
      // Si ambos están completos, llama al servicio CampeonService para agregar el campeón a la lista o base de datos.
      this.campeonService.addCampeon(this.campeon);
      
      // Resetea el objeto `campeon` después de haber agregado el campeón para preparar la creación de un nuevo campeón.
      this.campeon = {
        id: null,            // Resetea el ID del campeón.
        nombre: '',          // Resetea el nombre del campeón.
        habilidad_base: null, // Resetea la habilidad base del campeón.
        descripcion: '',     // Resetea la descripción del campeón.
        habilidad: []        // Resetea la lista de habilidades asociadas al campeón.
      };
    } else {
      // Si el nombre o la descripción están vacíos, muestra un mensaje de error en la consola.
      console.error('Nombre y descripción son obligatorios');
    }
  }
}