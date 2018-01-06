import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from 'firebase/app';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user$: Observable < UserInfo >

    constructor(private afAuth: AngularFireAuth, private router: Router) {
      this.user$ = this.afAuth.authState;
    }

  loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }
  loginClassic(email, password): Promise < any > {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signupClassic(email, password): Promise < any > {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}


