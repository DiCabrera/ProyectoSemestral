import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'login';
  Visible = true;

  //Model
  user : any ={
    username: '',
    password: '',
  }

  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.validateModel(this.user)){
    
      if(this.user.username =='ADMIN' && this.user.password =='admin'){
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['/']);
      }

      else if(this.user.username =='USER' && this.user.password =='user'){
        this.presentToast('Bienvenido ' + this.user.username);
        this.router.navigate(['/']);
      }

      else{
        this.presentToast('Los datos ingresados son invalidos');
      };
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
      duration:duration?duration:2000
    });
    toast.present();
  }

}
