import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedadPlacaPageRoutingModule } from './busquedad-placa-routing.module';

import { BusquedadPlacaPage } from './busquedad-placa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedadPlacaPageRoutingModule
  ],
  declarations: [BusquedadPlacaPage]
})
export class BusquedadPlacaPageModule {}
