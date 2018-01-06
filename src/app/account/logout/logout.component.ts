import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.logout();
  }

  private logout(){
    this.afAuth.auth.signOut()
    .then(success=>{
      console.log('LOGOUT SUCCESS!', success);
    })
    .catch(error=>{
      console.log('LOGOUT FAIL!', error);
    })
  }

}
