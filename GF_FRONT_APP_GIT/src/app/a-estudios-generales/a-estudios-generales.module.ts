import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AEstudiosGeneralesPageRoutingModule } from './a-estudios-generales-routing.module';

import { AEstudiosGeneralesPage } from './a-estudios-generales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AEstudiosGeneralesPageRoutingModule
  ],
  declarations: [AEstudiosGeneralesPage]
})
export class AEstudiosGeneralesPageModule {}
