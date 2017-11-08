import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot(environment.googlemaps),
    AngularFireModule.initializeApp(environment.firebase, "bring-me-out"),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
