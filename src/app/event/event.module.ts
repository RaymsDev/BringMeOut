import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import {MatSelectModule} from '@angular/material/select';
import {EventRoutingModule} from './event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    EventRoutingModule
  ],
  declarations: [EventComponent]
})
export class EventModule { }
