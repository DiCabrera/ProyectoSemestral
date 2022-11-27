import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController,ToastController,ModalController,AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Usuario } from 'src/app/services/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  pageTitle='Home';
  isNotLogin = true;
  ngOnInit() {

  }



 
  user: any;
  constructor(public menuCtrl: MenuController, private route: ActivatedRoute) {
   this.route.queryParams.subscribe(params => {
    console.log(params);
    if(params && params.user){
      this.user = params.user;
    }
   });
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}

