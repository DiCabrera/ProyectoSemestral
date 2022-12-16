import { Component, OnInit } from '@angular/core';
import { AuthService, InterUser } from '../../services/auth/auth.service';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-registrapp',
  templateUrl: './registrapp.page.html',
  styleUrls: ['./registrapp.page.scss'],
})
export class RegistrappPage implements OnInit {
  isTeacher: boolean;
  allowedFormats = [BarcodeFormat.QR_CODE];
  constructor(private auth: AuthService) {}
  scan(content: any) {
    console.log('Escaneamos', content);
  }
  ngOnInit() {
    this.auth.getUser().subscribe((user: InterUser) => {
      this.isTeacher = user.role === 'teacher';
    });
  }
}
