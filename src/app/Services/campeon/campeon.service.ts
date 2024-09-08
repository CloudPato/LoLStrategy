import { Injectable } from '@angular/core';
import { Campeon } from 'src/app/Modals/Campeon';
@Injectable({
  providedIn: 'root'
})
export class CampeonService {
  private campeones: Campeon[] = [];

  constructor() { }

  // Agrega un nuevo campeón
  addCampeon(campeon: Campeon): void {
    campeon.id = this.campeones.length ? Math.max(...this.campeones.map(c => c.id || 0)) + 1 : 1; // Asigna un ID único
    this.campeones.push(campeon);
    console.log('Campeón guardado en memoria:', campeon);
  }

  // Obtiene todos los campeones
  getCampeones(): Campeon[] {
    return this.campeones;
  }

  // Encuentra un campeón por ID
  getCampeonById(id: number): Campeon | undefined {
    return this.campeones.find(campeon => campeon.id === id);
  }

  // Actualiza un campeón por ID
  updateCampeon(updatedCampeon: Campeon): void {
    const index = this.campeones.findIndex(campeon => campeon.id === updatedCampeon.id);
    if (index !== -1) {
      this.campeones[index] = updatedCampeon;
    }
  }

  // Elimina un campeón por ID
  deleteCampeon(id: number): void {
    this.campeones = this.campeones.filter(campeon => campeon.id !== id);
  }
}