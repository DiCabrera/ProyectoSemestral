import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassGeneratorComponent } from './class-generator/class-generator.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [ClassGeneratorComponent, MarkAttendanceComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
  ],
  exports: [ClassGeneratorComponent, MarkAttendanceComponent],
})
export class ComponentsModule {}
