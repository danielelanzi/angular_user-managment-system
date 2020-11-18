import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
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

  public username: string;

  constructor(private auth: AuthService, private router: Router) {
    auth.usersignedin.subscribe(
      (user: User) => {
        this.username = user.name;
        this.isUserLOggedIn = true;
      }
    )
    auth.userlogout.subscribe(
      () => {
        this.username = '';
        this.isUserLOggedIn = false;
      }
    )
    auth.usersignedup.subscribe(
      (user: User) => {
        this.username = '';
        this.isUserLOggedIn = true;
      }
    )
  }

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
