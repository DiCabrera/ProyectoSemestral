import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Conversor', url: '/conversor', icon: 'planet' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'lock-closed' },
  ];
  constructor() { }
}
