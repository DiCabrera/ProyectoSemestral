import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonIcon, AlertController, NavController } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  pageTitle = 'login';
  isNotLogin = false;
  loading: HTMLIonLoadingElement;
  //Model
  user: any = {
    username: '',
    password: '',
  }

  field: string = '';

  constructor(public fb: FormBuilder, public navCtrl: NavController, private toastCtrl: ToastController, private router: Router, private loadingCtrl: LoadingController, public menuCtrl: MenuController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })
  }



  ngOnInit(): void {
    this.cargarLoading('Bienvenido(a) a RegistrAPP');

    console.log('OnInit');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  login() {
    if (this.validateModel(this.user)) {

      if (this.user.username == 'ADMIN' && this.user.password == 'admin') {
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['home']);
      }

      else if (this.user.username == 'USER' && this.user.password == 'user') {
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['home']);
      }

      else {
        this.presentToast('Los datos ingresados son invalidos');
      };
      localStorage.setItem('ingresado', 'true');
    }

    else {
      this.presentToast('Debes ingresar: ' + this.field);
    }
    var f = this.formularioLogin.value;
    var usuario = {
      nombre: f.nombre,
      password: f.password,
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))


  }

  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == '') {
        this.field = key;
        return false;
      }
    }
    return true;
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
