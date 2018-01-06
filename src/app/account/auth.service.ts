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

  loginFacebook():Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  loginGoogle():Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
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


