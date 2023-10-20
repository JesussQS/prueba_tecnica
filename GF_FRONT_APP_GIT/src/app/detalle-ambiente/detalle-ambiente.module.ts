import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAmbientePageRoutingModule } from './detalle-ambiente-routing.module';

import { DetalleAmbientePage } from './detalle-ambiente.page';

import { NavbarComponent } from '../navbar/navbar.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAmbientePageRoutingModule,
  ],
  declarations: [DetalleAmbientePage,NavbarComponent]
})
export class DetalleAmbientePageModule {}
