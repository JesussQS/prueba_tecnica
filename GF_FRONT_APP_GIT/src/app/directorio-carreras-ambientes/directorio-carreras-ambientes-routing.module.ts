import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorioCarrerasAmbientesPage } from './directorio-carreras-ambientes.page';

const routes: Routes = [
  {
    path: '',
    component: DirectorioCarrerasAmbientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorioCarrerasAmbientesPageRoutingModule {}
