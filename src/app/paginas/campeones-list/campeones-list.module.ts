import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonesListPageRoutingModule } from './campeones-list-routing.module';

import { CampeonesListPage } from './campeones-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonesListPageRoutingModule
  ],
  declarations: [CampeonesListPage]
})
export class CampeonesListPageModule {}
