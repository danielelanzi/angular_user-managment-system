import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output('onDeletedUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(){

  }

  deleteUser(){
    this.userDeleted.emit(this.user);
  }

  updateUser(){
    this.onSelectUser.emit(this.user);
  }

}
