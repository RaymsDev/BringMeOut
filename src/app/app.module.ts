import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { FIREBASE_MODULES } from './shared/firebase.shared';
import { SharedModule } from './shared/shared.module';
import { SignInModule } from './sign-in/sign-in.module';


const APP_MODULES = [
  MapModule,
  AccountModule
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
    SharedModule,
    AppRoutingModule,
    ...MATERIAL_MODULES,
    ...APP_MODULES,
    ...FIREBASE_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
