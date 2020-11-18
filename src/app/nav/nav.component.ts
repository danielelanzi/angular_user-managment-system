import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu = false;
  @Output() onNewUser = new EventEmitter();
  public isUserLOggedIn = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
      this.isUserLOggedIn  = this.auth.isUserLoggedIn();
  }

  newUser(){
    this.onNewUser.emit();
  }

  toogleMenu(){
    this.showMenu = ! this.showMenu;
  }

  logout(e){
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login'])
  }
  signIn(e){
    e.preventDefault();
    this.router.navigate(['login'])
  }
  signUp(e){
    e.preventDefault();
    this.router.navigate(['login'])
  }

}
