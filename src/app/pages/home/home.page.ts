import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle='Home';
  isNotLogin = true;
  
  constructor(public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  
  ngOnInit() {
  }

}
