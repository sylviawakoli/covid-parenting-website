import { Component, OnInit } from '@angular/core';

export type Visuals = {
  title: string;
  thumnailSrc: string;
  hrefSrc: string;
};

@Component({
  selector: 'app-audiovisuals',
  templateUrl: './audiovisuals.component.html',
  styleUrls: ['./audiovisuals.component.scss']
})
export class AudiovisualsComponent implements OnInit {

  comicsVisuals: Visuals[] = []; 
  visibleComicsVisuals: Visuals[] = []; 

  constructor() { 
    this.visibleComicsVisuals.push();
  }

  ngOnInit(): void {
  }

}
