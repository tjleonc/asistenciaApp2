import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsginaturaPageRoutingModule } from './asginatura-routing.module';

import { AsginaturaPage } from './asginatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsginaturaPageRoutingModule
  ],
  declarations: [AsginaturaPage]
})
export class AsginaturaPageModule {}
