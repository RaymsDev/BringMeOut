import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MapComponent } from './map/map.component';

const APP_COMPONENTS = [
  AppComponent,
  SignInComponent,
  MapComponent,
];

const MATERIAL_COMPONENTS = [
  MatSidenavModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ...APP_COMPONENTS,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ...MATERIAL_COMPONENTS,
    AngularFireModule.initializeApp(environment.firebase, "bring-me-out"),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
