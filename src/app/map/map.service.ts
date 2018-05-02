import { Injectable } from '@angular/core';
import {Coordinates, ICoordinates} from '../../models/coordinates.model';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';


@Injectable()
export class MapService {
  private coordinate: Coordinates;

  constructor() {
  }

  public getActualCoordinate(): Coordinates {
    return this.coordinate;
  }

  public setActualCoordinate(latitude, longitude) {
    this.coordinate = new Coordinates({lat: latitude, lng: longitude});
    console.log("Actual coordinate: " + this.coordinate.lat + " , " + this.coordinate.lng);
  }
}
