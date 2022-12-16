import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassGeneratorComponent } from './class-generator/class-generator.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QuarModule } from '@altack/quar';

@NgModule({
  declarations: [ClassGeneratorComponent, MarkAttendanceComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    QuarModule,
  ],
  exports: [ClassGeneratorComponent, MarkAttendanceComponent],
  providers: [],
})
export class ComponentsModule {}
