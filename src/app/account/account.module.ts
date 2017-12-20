import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL_MODULES = [
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule,
    ...MATERIAL_MODULES
  ],
  declarations: [routedComponents]
})
export class AccountModule { }
