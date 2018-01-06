import { AlreadyLoginGuard } from './already-login-guard.service';
import { AuthGuard } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate:[AlreadyLoginGuard]
}, {
  path: 'login-email',
  component: EmailComponent,
  canActivate:[AlreadyLoginGuard]
},{
  path: 'signup',
  component: SignupComponent,
  canActivate:[AlreadyLoginGuard]
},{
  path: 'logout',
  component: LogoutComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard, AlreadyLoginGuard]
})
export class AccountRoutingModule { }

export const routedComponents = [LoginComponent, EmailComponent, SignupComponent, LogoutComponent];