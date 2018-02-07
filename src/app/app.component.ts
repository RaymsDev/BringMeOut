import { Observable } from 'rxjs/Observable';
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

  public downloadUrlHandler(downloadUrl: string):void{
    console.log(downloadUrl);
  }

  public progressionHandler(percent: number){
    console.log(percent);
  }

}
