import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/Modals/habilidad';
import { Campeon } from 'src/app/Modals/Campeon';
import { CampeonService } from 'src/app/Services/campeon/campeon.service';

@Component({
  selector: 'app-crear-campeon',
  templateUrl: './crear-campeon.page.html',
  styleUrls: ['./crear-campeon.page.scss'],
})
export class CrearCampeonPage implements OnInit {
  // Define un objeto "campeon" que representa al campeón que se está creando, con sus propiedades inicializadas.
  campeon: Campeon = {
    id: null,            
    nombre: '',           
    habilidad_base: null, 
    descripcion: '',      
    habilidad: []         
  };

  // Define un objeto "nuevaHabilidad" que se utiliza para almacenar temporalmente la habilidad que se está agregando.
  nuevaHabilidad: Habilidad = {
    id: null,             
    nombre: '',           
    descripcion: null     
  };

  // Inyección del servicio CampeonService que maneja la lógica relacionada con los campeones.
  constructor(private campeonService: CampeonService) { }

  ngOnInit(): void {

  }

  // Método para agregar una nueva habilidad a la lista de habilidades del campeón.
  agregarHabilidad(): void {
    if (this.nuevaHabilidad.nombre) {
      this.campeon.habilidad.push(this.nuevaHabilidad);
      
      // Reinicializa el objeto "nuevaHabilidad" después de agregarla, para permitir agregar más habilidades.
      this.nuevaHabilidad = {
        id: null,            
        nombre: '',          
        descripcion: null    
      };
    } else {
      console.error('El nombre de la habilidad es obligatorio');  // Si el nombre de la habilidad está vacío, muestra un mensaje de error en la consola.
    }
  }

  // Método para finalizar el proceso de agregar habilidades y realizar validaciones adicionales si es necesario.
  finalizarAgregacion(): void {
    if (this.campeon.nombre && this.campeon.descripcion) {
    } else {     
      console.error('Nombre y descripción son obligatorios'); // Si faltan el nombre o la descripción, muestra un mensaje de error en la consola.
    }
  }

  // Método para guardar el campeón, que verifica si toda la información necesaria está completa.
  guardarCampeon(): void {
    // Verifica si el nombre, la descripción y al menos una habilidad están presentes.
    if (this.campeon.nombre && this.campeon.descripcion && this.campeon.habilidad.length > 0) {   
      this.campeonService.addCampeon(this.campeon);// Si todo está completo, llama al servicio para guardar el campeón.
      console.log('Campeón guardado exitosamente');
      
      // Resetea el objeto "campeon" después de guardarlo, para permitir la creación de un nuevo campeón.
      this.campeon = {
        id: null,             
        nombre: '',           
        habilidad_base: null,  
        descripcion: '',     
        habilidad: []         
      };
    } else {
      // Si falta alguna de las validaciones, muestra un mensaje de error en la consola.
      console.error('Nombre, descripción y habilidades son obligatorios');
    }
  }
}