import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaGraduadosPage } from './placa-graduados.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaGraduadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaGraduadosPageRoutingModule {}
