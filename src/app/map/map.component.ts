import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  position: Position;
  constructor() { }
  
  ngOnInit() {
    this.getPosition();
  }

  private getPosition(){
    navigator.geolocation.getCurrentPosition(position=>{
      this.position= position;
      this.initMap();
    })
  }
  
  private initMap() {
    
    
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: {lat: this.position.coords.latitude, lng: this.position.coords.longitude}
    });
    directionsDisplay.setMap(map);
    
    
  }
  
}
