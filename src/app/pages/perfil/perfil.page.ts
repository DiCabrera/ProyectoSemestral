import { Component, OnInit } from '@angular/core';
import { AuthService, InterUser } from '../../services/auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: InterUser;
  constructor(private auth: AuthService) {
    this.user = null;
    auth.getUser().subscribe((usr) => {
      console.log(this.user);
      this.user = usr;
    });
  }

  ngOnInit() {}
}
