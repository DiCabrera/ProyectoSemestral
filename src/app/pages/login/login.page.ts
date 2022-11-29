import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ToastController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pageTitle = 'login';
  isNotLogin = false;
  loading: HTMLIonLoadingElement;
  name: string= '';

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.cargarLoading('Bienvenido(a) a RegistrAPP');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  loginWithGoogle() {
    this.auth
      .login()
      .then((user) => {
        this.presentToast('Bienvenido ' + user.displayName);
        console.log(user.displayName);
        this.name = user?.displayName;
        console.log("dcdcd");
        this.router.navigate(['home'],{ queryParams: { user: user.displayName } });
      })
      .catch((err) => {
        console.error('Error ->', err);
      });
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration ? duration : 2000,
    });
    toast.present();
  }

  cargarLoading(mensaje: string) {
    this.presentLoading(mensaje);
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  /*async presentToastwelcome(message: string, duration?: number){
    const toast = await this.toastController.create({
      message: 'bienvenido a la aplicacion de asistencia de duoc UC!',
      duration: 1500,
      icon: 'globe'
    });

    await toast.prepend();
  }*/
}
