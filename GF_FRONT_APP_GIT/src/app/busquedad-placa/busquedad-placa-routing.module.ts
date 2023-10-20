import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedadPlacaPage } from './busquedad-placa.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedadPlacaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedadPlacaPageRoutingModule {}
