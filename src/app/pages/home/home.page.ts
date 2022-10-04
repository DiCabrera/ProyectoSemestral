import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Bienvenida', url: '/welcome', icon: 'mail' },
    { title: 'conversor', url: '/', icon: 'paper-plane' },
    { title: 'about', url: '/', icon: 'heart' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
