import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  signUp(form : NgForm){
    let result = this.auth.signUp(form.value.username, form.value.email, form.value.password);
    if (!result) {
      return;
    }
    this.router.navigate(['']);
  }

}
