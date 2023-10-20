import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AEspecialidadesPageRoutingModule } from './a-especialidades-routing.module';

import { AEspecialidadesPage } from './a-especialidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AEspecialidadesPageRoutingModule
  ],
  declarations: [AEspecialidadesPage]
})
export class AEspecialidadesPageModule {}
