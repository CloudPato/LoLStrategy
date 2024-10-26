import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/Services/api-config/api-config.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-campeones-list',
  templateUrl: './campeones-list.page.html',
  styleUrls: ['./campeones-list.page.scss'],
})
export class CampeonesListPage implements OnInit {
  campeones: any[] = [];
  selectedChampion: any;
  isModalOpen = false;

  constructor(private apiService: ApiConfigService) {}

  ngOnInit() {
    this.apiService.getChampions().subscribe(
      (data) => {
        const allChampions = Object.values(data.data); // Convierte el objeto en un array
        this.campeones = allChampions.slice(0, 7); // Toma solo los primeros 7 campeones

        // Obtiene las habilidades para cada campeón
        this.campeones.forEach(campeon => {
          this.apiService.getChampionAbilities(campeon.id).subscribe(abilitiesData => {
            campeon.spells = abilitiesData.data[campeon.id].spells; // Agrega las habilidades al campeón
          });
        });

        console.log(this.campeones); // Para verificar si se están obteniendo los campeones
      },
      (error) => {
        console.error('Error al cargar campeones', error);
      }
    );
  }

  showChampionInfo(campeon: any) {
    this.selectedChampion = campeon;
    this.isModalOpen = true;
  }
}