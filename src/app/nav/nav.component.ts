import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showMenu = false;
  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  newUser(){
    this.onNewUser.emit();
  }

  toogleMenu(){
    this.showMenu = ! this.showMenu;
  }

}
