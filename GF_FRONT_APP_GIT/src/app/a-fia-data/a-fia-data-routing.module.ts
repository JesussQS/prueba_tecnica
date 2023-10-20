import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AFiaDataPage } from './a-fia-data.page';

const routes: Routes = [
  {
    path: '',
    component: AFiaDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AFiaDataPageRoutingModule {}
