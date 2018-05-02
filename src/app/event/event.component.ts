import { Component, OnInit } from '@angular/core';
import {EventService} from './event.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EventType} from '../../models/eventtype.model';
import {Event} from '../../models/event.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {AuthService} from '../account/auth.service';
import {User, UserInfo} from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  eventCreate: Event;

  userInfo: any;

  //chips
  separatorKeysCodes = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  // Posibility for event type select
  eventTypeList = EventType;

  // Var for angular material list select
  options: FormGroup;

  constructor(private eventService: EventService, private afAuth: AngularFireAuth, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

  ngOnInit() {
    this.getUserInfo();
    this.resetOrEventCreate();
  }

  resetOrEventCreate(): void {
    this.eventCreate =  new Event();
    this.eventCreate.creator = this.userInfo;
  }

  sendButtonFire(): void {
    this.eventService.createEvent(this.eventCreate);
    this.resetOrEventCreate();
  }

  getUserInfo(): void {
    this.userInfo = this.afAuth.auth.currentUser.uid;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

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
    const index = this.eventCreate.keyWords.indexOf(keyWord);

    if (index >= 0) {
      this.eventCreate.keyWords.splice(index, 1);
    }
  }

  imageSrtingPath(event: string): void {
    this.eventCreate.image = event;
  }

  addressFromMap(infos : { address: String, long: String, lat: String}): void {
    console.log('infos remonté : ' + infos.address + ' coordonée : ' + infos.lat + ', ' + infos.long);
  }
}

