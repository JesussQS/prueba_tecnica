import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ALaboratoriosPage } from './a-laboratorios.page';

const routes: Routes = [
  {
    path: '',
    component: ALaboratoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ALaboratoriosPageRoutingModule {}
