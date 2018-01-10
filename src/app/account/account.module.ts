import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from './../shared/shared.module';
import { AccountRoutingModule, routedComponents } from './account-routing.module';
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
  declarations: [...routedComponents],
  providers:[AuthService]
})
export class AccountModule { }
