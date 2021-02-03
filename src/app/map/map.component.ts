import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;

  constructor() { }

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
      iconSize:[18, 18]
    })
  L.marker([-3.25, 33.30], {icon: myIcon}).addTo(this.map)
    .bindPopup('What this initiative has done to my family is so profound. I am able to appreciate the world of children, and I think I am learning good parenting. It has also challenged me to look at this crazy time I have found myself i through the positive lens of hope.".<br> - Parent in Malawi from Without Orphans <br><br> We understand that it is very hard for parents to adjust to the new norm, as they will have their children at home more than they are used to due to schools being closed. [The COVID-19 parenting resources] not only bring relief as we parent, but also challenge parenting in general, for some of us have failed miserably to parent well. It will leave a lasting impact and is amazing we have learnt this through a church in our community. <br> - Parent from Malawi <br><br> Thanks to parenting tips materials, family relationships are being enhanced.Most of our 23 local church partners have testified to how parents have been awakened to what should be natural and fun in families. Thriving social life relationships in most families have, unfortunately, been non-existent; and thanks to Covid19 as it has simply exposed this fact..<br> - World Without Orphans, Malawi <br><br> If I have found these (tips) helpful, for sure they should be for all parents and caregivers in our village. They are also applicable to people of all faiths, and I will highly recommend to the village head so we could advocate across our community. They are timely.<br> - Counsellor to village Headman Mphamba in Malawi')
    .openPopup();

    L.marker([40, 139.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('This isnt just something that helps with the corona disaster, its something that helps with the whole emergency situations. Let us be positive, Im sure that means praising yourself with the little things, not just your kids, but yourself as well.<br> - Comments on online article, Unicef Japan ')
    .openPopup();

    L.marker([7.10, 37.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('The messages are important and guiding especially this time when adolescents are at home. <br> - Catholic Relief Services (CRS), Kenya ')
    .openPopup();

  
    L.marker([47, 10.10], {icon: myIcon}).addTo(this.map)
    .bindPopup('The children of the world have an urgent need for safe havens right now, in both a spiritual and physical sense. Spiritual support - through this kind of creative engagement designed especially for children -can give a renewed sense of hope to families and churches alike.<br> - WCC Interim General Secretary Rev. Prof. Dr Ioan Sauca about the Church Leaders Pack ')
    .openPopup();



    tiles.addTo(this.map);
  }

}
