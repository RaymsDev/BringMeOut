import { AccountModule } from './account/account.module';
import { MapModule } from './map/map.module';
import { SignInModule } from './sign-in/sign-in.module';
import { async, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FIREBASE_MODULES } from './shared/firebase.shared';

const APP_MODULES = [
  AccountModule,
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
