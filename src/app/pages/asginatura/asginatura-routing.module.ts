import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsginaturaPage } from './asginatura.page';

const routes: Routes = [
  {
    path: '',
    component: AsginaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsginaturaPageRoutingModule {}
