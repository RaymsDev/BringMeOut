import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IMarker, Marker } from '../../../models/marker.model';
import {
  ICoordinates,
  Coordinates
} from './../../../models/coordinates.model';
declare let google: any;

@Component({
  selector: 'app-map-form',
  templateUrl: './map-form.component.html',
  styleUrls: ['./map-form.component.scss']
})
export class MapFormComponent implements OnInit {

  @Output() addressEvent = new EventEmitter<{ address: String, lng: number, lat: number}>();

  coordinates: ICoordinates;
  map: any;
  autocomplete: any;
  userPositionMarker: IMarker;

  constructor() {}

  ngOnInit() {
    this.initMarkers();
    this.getPosition();
  }

  private getPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.coordinates = Coordinates.fromPosition(position);
      this.initMap();
    }, (error) => {
      //TODO: get localisation if user block geolocalisation
    });
  }

  private initMap() {
    console.log('initmap!');
    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    this.map = new google.maps.Map(document.getElementById('map-event-form'), {
      zoom: 15,
      center: this.coordinates
    });

    directionsDisplay.setMap(this.map);
    this.initAutocomplete();
  }

  private initMarkers() {
    this.userPositionMarker = new Marker({
      icon: './../assets/images/markers/user_position.png',
      name: 'user_position'
    });
  }

  private initAutocomplete() {
    const component = this;
    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input-event-form');
    const searchBox = new google.maps.places.SearchBox(input);
    component.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    component.map.addListener('bounds_changed', function () {
      searchBox.setBounds(component.map.getBounds());
    });

    let markers = [];

    const marker = new google.maps.Marker({
      position: this.coordinates,
      icon: {
        scaledSize: new google.maps.Size(50, 50),
        url: this.userPositionMarker.icon
      },

      map: this.map,
      title: 'Your position!'
    });

    markers.push(marker);

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {

      const places = searchBox.getPlaces();

      // AQ
      if (places.length === 1) {
        //console.log( 'ne :' + places[0].geometry.location.lat() + ' we :' + places[0].geometry.location.lng());
        //console.log('Adresse : ' + places[0].formatted_address);

        component.addressEvent.emit({ address: places[0].formatted_address, lng: places[0].geometry.location.lng(), lat: places[0].geometry.location.lat()});
        //component.mapService.setActualCoordinate(places[0].geometry.location.lat(), places[0].geometry.location.lng());
      }

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function (marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log('Returned place contains no geometry');
          return;
        }

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: component.map,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      component.map.fitBounds(bounds);
    });
  }

}
