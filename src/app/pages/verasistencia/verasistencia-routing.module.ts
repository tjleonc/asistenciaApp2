import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerasistenciaPage } from './verasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: VerasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerasistenciaPageRoutingModule {}
