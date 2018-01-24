import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from './event.component';
import {AuthGuard} from '../account/auth-guard.service';

const routes: Routes = [{
  path: 'edit',
  component: EventComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class EventRoutingModule { }

