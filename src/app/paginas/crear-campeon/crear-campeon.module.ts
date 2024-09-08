import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCampeonPageRoutingModule } from './crear-campeon-routing.module';

import { CrearCampeonPage } from './crear-campeon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCampeonPageRoutingModule
  ],
  declarations: [CrearCampeonPage]
})
export class CrearCampeonPageModule {}
