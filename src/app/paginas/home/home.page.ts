import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/app/Services/supabase/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private supabaseService: SupabaseService, private router: Router) {}

  ngOnInit() {
    // Puedes inicializar cualquier dato aquí si es necesario
  }

  // Método para navegar a la página de campeones
  navigateToChampionsList() {
    this.router.navigate(['/campeones-list']);
  }

  // Si necesitas mostrar la lista de campeones, puedes añadir métodos aquí
}
