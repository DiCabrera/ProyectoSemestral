import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversorPageRoutingModule } from './conversor-routing.module';

import { ConversorPage } from './conversor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConversorPageRoutingModule
  ],
  declarations: [ConversorPage]
})
export class ConversorPageModule {}
