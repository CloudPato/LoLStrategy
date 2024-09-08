import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampeonesListPage } from './campeones-list.page';

const routes: Routes = [
  {
    path: '',
    component: CampeonesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampeonesListPageRoutingModule {}
