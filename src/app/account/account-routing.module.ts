import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'login-email',
  component: EmailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }

export const routedComponents = [LoginComponent, EmailComponent];