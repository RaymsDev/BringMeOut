import { AngularFireAuth } from 'angularfire2/auth';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SignInComponent } from './sign-in.component';
import { FIREBASE_MODULES } from '../shared/firebase.shared';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[...FIREBASE_MODULES],
      declarations: [ SignInComponent ],
      providers:[AngularFireAuth]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
