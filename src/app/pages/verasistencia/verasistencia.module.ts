import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerasistenciaPageRoutingModule } from './verasistencia-routing.module';

import { VerasistenciaPage } from './verasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerasistenciaPageRoutingModule
  ],
  declarations: [VerasistenciaPage]
})
export class VerasistenciaPageModule {}
