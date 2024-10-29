import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/Services/api-config/api-config.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-campeones-list',
  templateUrl: './campeones-list.page.html',
  styleUrls: ['./campeones-list.page.scss'],
})
export class CampeonesListPage implements OnInit {
  // Array para almacenar los campeones
  campeones: any[] = [];
  // Variable para almacenar el campeón seleccionado para mostrar en el modal
  selectedChampion: any;
  // Bandera para controlar si el modal está abierto o cerrado
  isModalOpen = false;

  // Constructor que inyecta el servicio de configuración de API
  constructor(private apiService: ApiConfigService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Llama al servicio para obtener la lista de campeones
    this.apiService.getChampions().subscribe(
      (data) => {
        // Convierte el objeto de campeones en un array
        const allChampions = Object.values(data.data);
        // Toma solo los primeros 7 campeones del array
        this.campeones = allChampions.slice(0, 7);

        // Obtiene las habilidades para cada campeón
        this.campeones.forEach(campeon => {
          this.apiService.getChampionAbilities(campeon.id).subscribe(abilitiesData => {
            // Agrega las habilidades al campeón actual
            campeon.spells = abilitiesData.data[campeon.id].spells;
          });
        });

        // Imprime los campeones en la consola para verificar si se están obteniendo correctamente
        console.log(this.campeones);
      },
      (error) => {
        // Manejo de errores en caso de que falle la llamada a la API
        console.error('Error al cargar campeones', error);
      }
    );
  }

  // Método para mostrar información del campeón seleccionado
  showChampionInfo(campeon: any) {
    // Asigna el campeón seleccionado a la variable correspondiente
    this.selectedChampion = campeon;
    // Abre el modal
    this.isModalOpen = true;
  }
}
