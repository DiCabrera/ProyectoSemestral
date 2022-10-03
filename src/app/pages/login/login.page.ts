import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController,LoadingController, IonIcon } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'login';
  Visible = true;
  loading : HTMLIonLoadingElement;
  //Model
  user : any ={
    username: '',
    password: '',
  }

  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router,private loadingCtrl: LoadingController) { }

  ngOnInit(): void {    
    this.cargarLoading('Welcome a Lala Entertainmet!!!');
    console.log('OnInit');
  }

  login(){
    if(this.validateModel(this.user)){
    
      if(this.user.username =='ADMIN' && this.user.password =='admin'){
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['home']);
      }

      else if(this.user.username =='USER' && this.user.password =='user'){
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['home']);
      }

      else{
        this.presentToast('Los datos ingresados son invalidos');
      };
      localStorage.setItem('ingresado','true');
      
    }

    else{
      this.presentToast('Debes ingresar: ' + this.field);
    }
    
  }
   
  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000,
    });
    toast.present();
  }


  cargarLoading(mensaje: string){
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
