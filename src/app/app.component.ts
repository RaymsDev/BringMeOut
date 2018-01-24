import { EventService } from './event/event.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bring Me Out!';
  constructor(private afAuth: AngularFireAuth, private eventService: EventService){

  }

  ngOnInit(){

  }

  public userIsLoggedIn(): boolean{
    return this.afAuth.auth.currentUser ? true: false;
  }


}
