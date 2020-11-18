import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {UserInterface} from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  users: User[] = [];

private APIURL = "http://localhost:3000/users";

constructor(private http: HttpClient) { }

getUsers(){
  return this.http.get<User[]>(this.APIURL)
}

getUser(id:number){
  return this.http.get<User>(this.APIURL + '/' + id);
}

deleteUser(user){
  return this.http.delete<User>(this.APIURL + '/' + user.id);
  }

updateUser(user: UserInterface) {
  return this.http.patch<User>(this.APIURL + '/' + user.id, user)
}
createUser(user: UserInterface) {
  return this.http.post<User>(this.APIURL, user)
}

}
