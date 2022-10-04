import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'cil-home' },
    { title: 'Conversor', url: '/conversor', icon: 'cil-input-power' },
    { title: 'About', url: '/about', icon: 'cil-face' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'cil-exit-to-app' }
  ];
  constructor() {}
}
