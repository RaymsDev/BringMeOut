import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'login-email',
  component: EmailComponent
},{
  path: 'signup',
  component: SignupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }

export const routedComponents = [LoginComponent, EmailComponent, SignupComponent];