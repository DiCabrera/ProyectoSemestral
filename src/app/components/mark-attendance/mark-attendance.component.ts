import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { AuthService } from '../../services/auth/auth.service';
import { ClassInfo } from '../class-generator/class-generator.component';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss'],
})
export class MarkAttendanceComponent implements OnInit {
  scanning = false;
  error = false;
  scanned = false;
  constructor(private crud: CrudService, private auth: AuthService) {}
  scan() {
    this.scanning = true;
  }
  async onScan(classID: string) {
    try {
      const classData: ClassInfo = await this.crud.getById('classes', classID);
      if (classData.status === 'closed') {
        this.error = true;
        this.scanning = false;
        return;
      }

      const update: ClassInfo = {
        ...classData,
        attendees: [...classData.attendees, this.auth.user],
      };
      await this.crud.update(update, classID, 'classes');
      this.scanned = true;
      this.error = false;
      this.scanning = false;
      /* Setear algo para avisar a la UI */
    } catch (err) {
      alert('Error' + err.message);
      console.error('ERROR: ', err);
    }
  }
  ngOnInit() {}
}
