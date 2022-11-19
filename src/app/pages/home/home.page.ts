import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle='Home';
  isNotLogin = true;

 
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
  
  ngOnInit() {

  }

}
