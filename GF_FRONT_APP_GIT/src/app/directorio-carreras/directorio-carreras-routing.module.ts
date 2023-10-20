import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorioCarrerasPage } from './directorio-carreras.page';

const routes: Routes = [
  {
    path: '',
    component: DirectorioCarrerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorioCarrerasPageRoutingModule {}
