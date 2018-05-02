import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEventOrderByDateStart().subscribe( events => this.events = events);
  }

}
