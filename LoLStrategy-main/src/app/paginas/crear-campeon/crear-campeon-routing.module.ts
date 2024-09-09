import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCampeonPage } from './crear-campeon.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCampeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCampeonPageRoutingModule {}
