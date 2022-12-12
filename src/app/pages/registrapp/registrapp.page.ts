import { Component, OnInit } from '@angular/core';
import { AuthService, InterUser } from '../../services/auth/auth.service';

@Component({
  selector: 'app-registrapp',
  templateUrl: './registrapp.page.html',
  styleUrls: ['./registrapp.page.scss'],
})
export class RegistrappPage implements OnInit {
  isTeacher: boolean;
  constructor(private auth: AuthService) {
    this.isTeacher = auth.user?.role === 'teacher';
  }

  ngOnInit() {
    this.auth.getUser().subscribe((user: InterUser) => {
      this.isTeacher = user.role === 'teacher';
    });
  }
}
