import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.loginClassic(
          formData.value.email,
          formData.value.password)
        .then(success => {
          console.log("Login with email success", success);
          this.router.navigate(["/"]);
        })
        .catch(error => {
          console.log(error);
          this.error = error.message;
        });
    }
  }
}


