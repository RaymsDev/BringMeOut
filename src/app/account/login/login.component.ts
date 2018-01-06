import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService) {}

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }


  ngOnInit() {}


}
