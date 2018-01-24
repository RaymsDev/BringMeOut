import { EventService } from './event/event.service';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { AccountModule } from './account/account.module';
import { EventModule} from './event/event.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { FIREBASE_MODULES } from './shared/firebase.shared';
import { SharedModule } from './shared/shared.module';
import { AngularFirestore } from 'angularfire2/firestore';




const APP_MODULES = [
  MapModule,
  AccountModule,
  EventModule,
  MatIconModule
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
  providers: [EventService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
