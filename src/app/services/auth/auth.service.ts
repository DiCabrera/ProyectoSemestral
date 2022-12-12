import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import User = firebase.User;
import { CrudService } from '../crud/crud.service';
import { Observable, Subject } from 'rxjs';

export interface InterUser {
  displayName: string;
  email: string;
  role: 'teacher' | 'student';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: InterUser;
  private userNotifier$: Subject<InterUser>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private crud: CrudService
  ) {
    this.user = null;
    this.userNotifier$ = new Subject();

    this.afAuth.user.subscribe((user) => {
      if (user) {
        this.syncUser(user);
      }
    });
  }
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

  getUser(): Observable<InterUser> {
    return this.userNotifier$.asObservable();
  }

  private async syncUser(user: User) {
    try {
      const matches: InterUser[] = await this.crud.getByQuery('users', {
        email: user.email,
      });
      if (matches.length > 0) {
        this.user = matches[0];
        this.userNotifier$.next(this.user);
        return;
      }

      const newUser: InterUser = {
        displayName: user.displayName,
        email: user.email,
        role: 'student',
      };

      await this.crud.create(newUser, 'users');
      this.user = newUser;
      this.userNotifier$.next(this.user);
    } catch (err) {
      console.error('Error Sincronizando usuario:', err);
    }
  }
}
