import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'


@Component({
  selector: 'app-impact-stories',
  templateUrl: './impact-stories.component.html',
  styleUrls: ['./impact-stories.component.scss']
})
export class ImpactStoriesComponent implements OnInit {

 
  private map;

  constructor( ) {
  
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map',{
      zoomDelta:0.25,
      zoomSnap:0.5,
      minZoom: 2,
      maxZoom:2,
      dragging: false
    }).setView([0.0, 0], 2);

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
      maxZoom: 20,
      attribution:'Map data © OpenStreetMap contributors'
    });

    const myIcon = L.icon({
      iconUrl:'assets/icon/favicon.png',
      iconSize:[30, 30]
    })
  L.marker([-7.25, 33.30], {icon: myIcon}).addTo(this.map)
    .bindPopup('What this initiative has done to my family is so profound. I am able to appreciate the world of children, and I think I am learning good parenting. It has also challenged me to look at this crazy time I have found myself i through the positive lens of hope.".<br> - Parent in Malawi from Without Orphans')
    .openPopup();

  L.marker([45, 23.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('We understand that it is very hard for parents to adjust to the new norm, as they will have their children at home more than they are used to due to schools being closed. [The COVID-19 parenting resources] not only bring relief as we parent, but also challenge parenting in general, for some of us have failed miserably to parent well. It will leave a lasting impact and is amazing we have learnt this through a church in our community. <br> - Parent from Malawi ')
    .openPopup();
    tiles.addTo(this.map);
  }

}
