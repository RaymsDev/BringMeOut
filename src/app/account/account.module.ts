import { AuthGuard } from './auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule,
    ...MATERIAL_MODULES
  ],
  declarations: [routedComponents, SignupComponent, LogoutComponent],
  providers:[AuthService]
})
export class AccountModule { }
