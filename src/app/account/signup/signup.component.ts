import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService :AuthService, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      this.authService.signupClassic(
        formData.value.email,
        formData.value.password
      ).then((success) => {
        console.log(success);
        this.router.navigate(['/'])
      }).catch((err) => {
        console.log(err);
        this.error = err.message;
      })
    }
  }

  ngOnInit() {
  }

}
