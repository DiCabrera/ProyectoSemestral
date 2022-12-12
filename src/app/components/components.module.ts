import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassGeneratorComponent } from './class-generator/class-generator.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';

@NgModule({
  declarations: [ClassGeneratorComponent, MarkAttendanceComponent],
  imports: [CommonModule],
  exports: [ClassGeneratorComponent, MarkAttendanceComponent],
})
export class ComponentsModule {}
