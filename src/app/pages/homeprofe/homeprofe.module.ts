import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprofePageRoutingModule } from './homeprofe-routing.module';

import { HomeprofePage } from './homeprofe.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprofePageRoutingModule,
    ComponentsModule
],
  declarations: [HomeprofePage]
})
export class HomeprofePageModule {}
