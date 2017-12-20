import { FIREBASE_MODULES } from './shared/firebase.shared';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { SharedModule } from './shared/shared.module';
import { SignInModule } from './sign-in/sign-in.module';


const APP_MODULES = [
  MapModule,
  SignInModule
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ...MATERIAL_MODULES,
    ...APP_MODULES,
    ...FIREBASE_MODULES,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
