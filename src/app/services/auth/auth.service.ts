import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  async login() {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      localStorage.setItem('ingresado', JSON.stringify(user));
      this.router.navigate(['home']);
      return user;
    } catch (err) {
      console.error('Error ->', err);
    }
  }
  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('ingresado');
      this.router.navigate(['login']);
    } catch (err) {
      console.error('Error -> ', err);
    }
  }
}
