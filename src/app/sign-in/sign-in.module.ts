import { NgModule } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from './../shared/shared.module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
      SharedModule,
  ],
  exports: [SignInComponent],
  declarations: [SignInComponent],
  providers: [AngularFireAuth],
})
export class SignInModule {}
