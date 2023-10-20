import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ALaboratoriosPageRoutingModule } from './a-laboratorios-routing.module';

import { ALaboratoriosPage } from './a-laboratorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ALaboratoriosPageRoutingModule
  ],
  declarations: [ALaboratoriosPage]
})
export class ALaboratoriosPageModule {}
