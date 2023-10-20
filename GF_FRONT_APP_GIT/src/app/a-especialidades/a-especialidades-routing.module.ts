import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AEspecialidadesPage } from './a-especialidades.page';

const routes: Routes = [
  {
    path: '',
    component: AEspecialidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AEspecialidadesPageRoutingModule {}
