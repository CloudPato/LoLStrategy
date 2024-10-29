import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Este servicio estará disponible en toda la aplicación
})
export class ApiConfigService {
  // Almacena la URL de la API desde el archivo de entorno
  private apiUrl: string = environment.apiUrl;

  // Constructor que inyecta el servicio HttpClient
  constructor(private http: HttpClient) {}

  // Método para obtener la lista de campeones
  getChampions(): Observable<any> {
    // Realiza una solicitud GET a la URL de la API para obtener los campeones
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Método para obtener las habilidades de un campeón específico
  getChampionAbilities(championId: string): Observable<any> {
    // Construye la URL para obtener las habilidades del campeón usando su ID
    const url = `https://ddragon.leagueoflegends.com/cdn/14.21.1/data/es_ES/champion/${championId}.json`;
    // Realiza una solicitud GET a la URL construida y retorna el Observable
    return this.http.get<any>(url);
  }
}