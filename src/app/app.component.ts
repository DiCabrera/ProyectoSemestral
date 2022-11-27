import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
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
  ];
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
