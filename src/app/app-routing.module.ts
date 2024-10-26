import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'campeones-list',
    loadChildren: () => import('./paginas/campeones-list/campeones-list.module').then( m => m.CampeonesListPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'registrarse',
    loadChildren: () => import('./paginas/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./paginas/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
