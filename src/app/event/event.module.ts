import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import {EventRoutingModule} from './event-routing.module';
import {EventService} from './event.service';

import {SharedModule} from '../shared/shared.module';

// Angular Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';


const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule
];

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    ...MATERIAL_MODULES,
    SharedModule
  ],
  declarations: [EventComponent],
  providers: [EventService, FormBuilder,  {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}]
})
export class EventModule { }
