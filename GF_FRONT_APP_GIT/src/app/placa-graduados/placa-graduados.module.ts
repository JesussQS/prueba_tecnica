import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacaGraduadosPageRoutingModule } from './placa-graduados-routing.module';

import { PlacaGraduadosPage } from './placa-graduados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaGraduadosPageRoutingModule
  ],
  declarations: [PlacaGraduadosPage]
})
export class PlacaGraduadosPageModule {}
