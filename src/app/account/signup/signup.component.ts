import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  onSubmit(formData) {
    if(formData.valid) {
      this.afAuth.auth.createUserWithEmailAndPassword(
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
