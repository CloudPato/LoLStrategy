import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private apiUrl: string = environment.apiUrl; // Usa la URL de tu archivo de entorno

  constructor(private http: HttpClient) {}

  getChampions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getChampionAbilities(championId: string): Observable<any> {
    const url = `https://ddragon.leagueoflegends.com/cdn/14.21.1/data/es_ES/champion/${championId}.json`;
    return this.http.get<any>(url);
  }
}
