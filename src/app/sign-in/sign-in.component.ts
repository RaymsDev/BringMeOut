import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  isLogin: boolean;
  user:any;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {  
    this.isLogin = false;
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(success=>{
      this.user = success.user;
      this.isLogin = true;
      console.log(success);
    });
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
