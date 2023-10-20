import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectorioCarrerasAmbientesPageRoutingModule } from './directorio-carreras-ambientes-routing.module';

import { DirectorioCarrerasAmbientesPage } from './directorio-carreras-ambientes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectorioCarrerasAmbientesPageRoutingModule,
  ],
  declarations: [DirectorioCarrerasAmbientesPage]
})
export class DirectorioCarrerasAmbientesPageModule {}
