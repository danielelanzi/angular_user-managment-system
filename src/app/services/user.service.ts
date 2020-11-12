import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {UserInterface} from '../interfaces/user';

@Injectable()
export class UserService {
  users: User[] = [
    {
    id : 1,
    name : 'Daniele',
    lastname : 'Lanzi',
    email : 'dnlshiva@gmail.com',
    fiscalcode : 'LNZDNL91R16H501K',
    province : 'Roma',
    phone : '1234567890',
    age : 29
  },
  {
    id : 2,
    name : 'abcdfg',
    lastname : 'hilmno',
    email : 'dnlshiva@gmail.com',
    fiscalcode : 'LNZDNL91R16H501K',
    province : 'Roma',
    phone : '1234567890',
    age : 29
  },
  {
    id : 3,
    name : 'pqrst',
    lastname : 'uvz',
    email : 'dnlshiva@gmail.com',
    fiscalcode : 'LNZDNL91R16H501K',
    province : 'Roma',
    phone : '1234567890',
    age : 3
  },
];

constructor() { }

getUsers(){
  return this.users;
}

deleteUser(user){
  const index = this.users.indexOf(user);
  if(index>=0){
    this.users.splice(index,1);
  }
}

updateUser(user: UserInterface) {
  const idx = this.users.findIndex((v) => v.id === user.id);
  alert(idx);
  if (idx !== -1) {
    this.users[idx] = user;
  }
}
createUser(user: UserInterface) {
  this.users.splice(0,0,user)
}

}
