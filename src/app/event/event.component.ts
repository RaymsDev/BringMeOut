import { Component, OnInit } from '@angular/core';
import {EventService} from './event.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventType} from '../../models/eventtype.model';
import {Event} from '../../models/event.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  eventCreate: Event;

  //chips
  separatorKeysCodes = [ENTER, COMMA];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Posibility for event type select
  eventTypeList = EventType;

  // Var for angular material list select
  options: FormGroup;

  constructor(private eventService: EventService, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

  ngOnInit() {
    this.eventCreate =  new Event();
  }

  sendButtonFire(): void {
    //console.log(this.eventCreate);
    this.eventService.createEvent(this.eventCreate);
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.eventCreate.keyWords.push( value.trim() );
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(keyWord: any): void {
    let index = this.eventCreate.keyWords.indexOf(keyWord);

    if (index >= 0) {
      this.eventCreate.keyWords.splice(index, 1);
    }
  }

  imageSrtingPath(event: string): void {
    this.eventCreate.image = event;
  }
}

