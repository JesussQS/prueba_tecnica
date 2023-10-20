import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AEstudiosGeneralesPage } from './a-estudios-generales.page';

const routes: Routes = [
  {
    path: '',
    component: AEstudiosGeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AEstudiosGeneralesPageRoutingModule {}
