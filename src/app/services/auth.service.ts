import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogged = true;

  constructor() { }
  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('toke')
    return this.isUserLogged;
  }
  signIn(email: string, password: string) {
    localStorage.setItem('toke', email);
    return true;
  }
  signUp(username: string, email: string, password: string) {

  }
  logout() {
    localStorage.removeItem('token');
    this.isUserLogged = false;
  }
}
