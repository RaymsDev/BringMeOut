import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IEvent } from '../../models/event.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class EventService {
  private collection: AngularFirestoreCollection<IEvent>;
  private items$: Observable<IEvent[]>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection<IEvent>('events');
    this.items$ = this.collection.valueChanges();
  }

  public getEvents(): Observable<IEvent[]>{
    return this.items$;
  }

  public createEvent(event: IEvent){
    this.collection.add(JSON.parse(JSON.stringify(event)));
  }

  public updateEvent(){

  }

  public deleteEvent(){

  }
}
