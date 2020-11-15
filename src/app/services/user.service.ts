import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {UserInterface} from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

interface UsersResponse{
  data: User[];
  message: string;
}
interface UserResponse{
  data: User;
  message: string;
}

@Injectable()
export class UserService {
  users: User[] = [];

private APIURL = "https://api.mocki.io/v1/122457f2/users"

constructor(private http: HttpClient) { }

getUsers(){
  return this.http.get<UsersResponse>(this.APIURL);
}

getUser(id:number){
  return this.http.get<UserResponse>(this.APIURL + '/' + id);
}

deleteUser(user){
  const index = this.users.indexOf(user);
  if(index>=0){
    this.users.splice(index,1);
  }
}

updateUser(user: UserInterface) {
  const idx = this.users.findIndex((v) => v.id === user.id);
  if (idx !== -1) {
    this.users[idx] = user;
  }
}
createUser(user: UserInterface) {
  user.id = this.users.length + 1;
  this.users.splice(0,0,user)
}

}
