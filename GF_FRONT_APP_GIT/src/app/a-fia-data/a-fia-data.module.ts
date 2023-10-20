import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AFiaDataPageRoutingModule } from './a-fia-data-routing.module';

import { AFiaDataPage } from './a-fia-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AFiaDataPageRoutingModule
  ],
  declarations: [AFiaDataPage]
})
export class AFiaDataPageModule {}
