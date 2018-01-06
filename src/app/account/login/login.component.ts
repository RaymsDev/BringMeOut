import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(public authService:AuthService, private router: Router) {}

  loginFacebook() {
    this.authService.loginFacebook()
    .then(success => {
      console.log("Login with Facebook success", success);
      this.router.navigate(["/"]);
    })
    .catch(error => {
      console.log(error);
      this.error = error.message;
    });
  }

  loginGoogle() {
    this.authService.loginGoogle()
    .then(success => {
      console.log("Login with Google success", success);
      this.router.navigate(["/"]);
    })
    .catch(error => {
      console.log(error);
      this.error = error.message;
    });
  }


  ngOnInit() {}


}
