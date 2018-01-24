import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import {EventRoutingModule} from './event-routing.module';

// Angular Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    ...MATERIAL_MODULES
  ],
  declarations: [EventComponent]
})
export class EventModule { }
