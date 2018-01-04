import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  onSubmit(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(
          formData.value.email,
          formData.value.password)
        .then(success=>{
          console.log("Login with email success", success);
          this.router.navigate(["/"]);
        })
        .catch(error=>{
          console.log(error);
          this.error = error.message;
        });
    }
  }
}

