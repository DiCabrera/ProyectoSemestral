import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { InterUser } from '../../services/auth/auth.service';

interface ClassInfo {
  id: string;
  name: string;
  attendees: InterUser[];
  status: 'open' | 'closed';
}

@Component({
  selector: 'app-class-generator',
  templateUrl: './class-generator.component.html',
  styleUrls: ['./class-generator.component.scss'],
})
export class ClassGeneratorComponent implements OnInit {
  name: string;
  classInfo: ClassInfo;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  QRData: string | null;
  constructor(private crud: CrudService) {
    this.QRData = localStorage.getItem('class_id');
    this.name = localStorage.getItem('class_name');
    this.classInfo = null;

    if (this.QRData) {
      this.refreshAttendees();
    }
  }

  ngOnInit() {}

  generateClass() {
    this.classInfo = {
      id: '',
      name: this.name,
      attendees: [],
      status: 'open',
    };
    this.crud
      .create(this.classInfo, 'classes')
      .then((res) => {
        this.QRData = res.id;
        this.classInfo.id = res.id;
        localStorage.setItem('class_id', res.id);
        localStorage.setItem('class_name', this.name);
      })
      .catch((err) => console.error(err));
  }
  stopClass() {
    this.classInfo.status = 'closed';
    this.crud.update(this.classInfo, this.classInfo.id, 'classes');
    localStorage.removeItem('class_id');
    localStorage.removeItem('class_name');
    this.name = null;
    this.QRData = null;
  }
  refreshAttendees() {
    this.crud
      .getById('classes', this.QRData)
      .then((res) => (this.classInfo = res))
      .catch((err) => console.error(err));
  }
}
