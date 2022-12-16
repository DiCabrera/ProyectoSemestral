import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';
import { InterUser } from '../../services/auth/auth.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.page.html',
  styleUrls: ['./permisos.page.scss'],
})
export class PermisosPage implements OnInit {
  public usuarios: InterUser[];
  constructor(private crud: CrudService) {
    this.usuarios = [];
    this.getAll();
  }
  getAll() {
    this.crud.getAll('users').subscribe((users) => {
      console.log(users);
      this.usuarios = users as InterUser[];
    });
  }
  ngOnInit() {}
}
