import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrappPageRoutingModule } from './registrapp-routing.module';

import { RegistrappPage } from './registrapp.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RegistrappPageRoutingModule,
  ],
  declarations: [RegistrappPage],
})
export class RegistrappPageModule {}
