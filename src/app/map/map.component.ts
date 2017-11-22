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
  map: any;
  constructor() {}

  ngOnInit() {
    this.getPosition();
  }

  private getPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.coordinates = Coordinates.fromPosition(position);
      this.initMap();
    },(error)=>{
      //TODO: get localisation if user block geolocalisation
    });
  }

  private initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: this.coordinates
    });

    directionsDisplay.setMap(this.map);
    this.initAutocomplete();
  }

  private initAutocomplete() {
    const component =this;
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    component.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    component.map.addListener('bounds_changed', function() {
      searchBox.setBounds(component.map.getBounds());
    });

    var markers = [];

    var marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
      title: 'Your position!'
    });

    markers.push(marker);

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

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
