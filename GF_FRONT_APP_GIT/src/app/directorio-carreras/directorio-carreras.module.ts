import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectorioCarrerasPageRoutingModule } from './directorio-carreras-routing.module';

import { DirectorioCarrerasPage } from './directorio-carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectorioCarrerasPageRoutingModule
  ],
  declarations: [DirectorioCarrerasPage]
})
export class DirectorioCarrerasPageModule {}
