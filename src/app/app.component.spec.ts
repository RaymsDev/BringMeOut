import { environment } from './../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MapModule } from './map/map.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SignInModule } from './sign-in/sign-in.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { $ } from 'protractor';
import { FIREBASE_MODULES } from './shared/firebase.shared';

const APP_MODULES = [
  SignInModule,
  MapModule,
  BrowserAnimationsModule,
  NoopAnimationsModule
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatButtonModule
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        ...APP_MODULES,
        ...MATERIAL_MODULES,
        ...FIREBASE_MODULES
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const component = fixture.debugElement.componentInstance
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Bring Me Out!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bring Me Out!');
  }));
});
