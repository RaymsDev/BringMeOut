import {
  ICoordinates,
  Coordinates
} from './../../models/coordinates.model';
import {
  Component,
  OnInit
} from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  coordinates: ICoordinates;
  constructor() {}

  ngOnInit() {
    this.getPosition();
  }

  private getPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.coordinates = Coordinates.fromPosition(position);
      this.initMap();
    });
  }

  private initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: this.coordinates
    });

    var marker = new google.maps.Marker({
      position: this.coordinates,
      map: map,
      title: 'Your position!'
    });

    directionsDisplay.setMap(map);

  }

}
