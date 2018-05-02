<<<<<<< HEAD
import { IMarker, Marker } from '../../models/marker.model';
import {
  ICoordinates,
  Coordinates
} from './../../models/coordinates.model';
import {
  Component,
  OnInit
} from '@angular/core';
import {MapService} from './map.service';
=======
import { EventService } from "./../event/event.service";
import { IMarker, Marker } from "../../models/marker.model";
import { ICoordinates, Coordinates } from "./../../models/coordinates.model";
import { Component, OnInit } from "@angular/core";
>>>>>>> 3c974873014781bb2d5717618ecac47d867efa95
declare let google: any;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  coordinates: ICoordinates;
  map: any;
<<<<<<< HEAD
  autocomplete: any;
  userPositionMarker :IMarker;
  constructor(private mapService: MapService) {}
=======
  userPositionMarker: IMarker;
  constructor(public eventService: EventService) {}
>>>>>>> 3c974873014781bb2d5717618ecac47d867efa95

  ngOnInit() {
    this.initMarkers();
    this.getPosition();
    this.initAutocompleteChangeLister();
  }

  private getPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.coordinates = Coordinates.fromPosition(position);
        this.initMap();
      },
      error => {
        //TODO: get localisation if user block geolocalisation
      }
    );
  }

  private initMap() {
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: this.coordinates
    });

    directionsDisplay.setMap(this.map);
    this.initAutocomplete();
  }

  private initMarkers() {
    this.userPositionMarker = new Marker({
      icon: "./../assets/images/markers/user_position.png",
      name: "user_position"
    });
  }

  private initAutocompleteChangeLister() {
    let input = document.getElementById('pac-input');

  }

  private initAutocomplete() {


    let markers = [];

    let userMarker = new google.maps.Marker({
      position: this.coordinates,
      icon: {
        scaledSize: new google.maps.Size(50, 50),
        url: this.userPositionMarker.icon
      },

      map: this.map,
      title: "Your position!"
    });

    markers.push(userMarker);

    let eventsMarkers
    this.getEventMarkers(this.map)
    .then(eventMarkers=>{
      markers.push(...eventMarkers);
      this.initSearchPlace(markers);
    });

    
  }

  private initSearchPlace(eventMarkers: Array<any>){
    const component = this;
    let markers = [];
    // Create the search box and link it to the UI element.
    let input = document.getElementById("pac-input");
    let searchBox = new google.maps.places.SearchBox(input);
    component.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    component.map.addListener("bounds_changed", function() {
      searchBox.setBounds(component.map.getBounds());
    });
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
<<<<<<< HEAD
    searchBox.addListener('places_changed', function () {

=======
    searchBox.addListener("places_changed", function() {
>>>>>>> 3c974873014781bb2d5717618ecac47d867efa95
      let places = searchBox.getPlaces();

      // AQ
      if (places.length === 1) {
        //console.log( 'ne :' + places[0].geometry.location.lat() + 'we :' + places[0].geometry.location.lng());
        component.mapService.setActualCoordinate(places[0].geometry.location.lat(), places[0].geometry.location.lng())
      }

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [...eventMarkers];

      // For each place, get the icon, name and location.
      let bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        console.log(place);
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: component.map,
            title: place.name,
            position: place.geometry.location
          })
        );

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

  private getEventMarkers(map): Promise<Array<any>> {
    const promise = new Promise<Array<any>>(resolve => {
      this.eventService.getEvents().subscribe(events => {
        const eventMarkers = events.map(e => {
          if (e.location && e.location.coordinates) {
            return new google.maps.Marker({
              map: map,
              title: e.name,
              position: e.location.coordinates
            });
          }else{
            const coordinates :ICoordinates = {
              lat:43.578117,
              lng:1.481942
            };

            return new google.maps.Marker({
              map: map,
              title: e.name,
              position: coordinates
            });
          }
        });
        resolve(eventMarkers);
      });
    });

    return promise;
  }
}
