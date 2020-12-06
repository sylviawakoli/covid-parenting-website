import { Component, OnInit } from '@angular/core';
import { ResourcesService, Resource } from '../resources.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export type Visuals = {
  title: string;
  thumnailSrc: string;
  url: string;
  urlSafe: SafeResourceUrl;
};

@Component({
  selector: 'app-audiovisuals',
  templateUrl: './audiovisuals.component.html',
  styleUrls: ['./audiovisuals.component.scss']
})
export class AudiovisualsComponent implements OnInit {

  private numOfResourcesToShow: number = 6;//used to show resources in batches

  public arrAllComicsVisuals: Visuals[] = [];
  public arrVisibleComicsVisuals: Visuals[] = [];
  public bShowloadMoreComicsButton: boolean = false;

  public arrAllSlowDownVideosVisuals: Visuals[] = [];
  public arrVisibleSlowDownVisuals: Visuals[] = [];
  public bShowloadMoreSlowDownVideosButton: boolean = false;



  constructor(private resourcesService: ResourcesService, private sanitizer: DomSanitizer) {
   
  }

  ngOnInit(): void {
    this.loadComics();
    this.loadSlowDownVideos();
  }

  private loadComics() {
    this.resourcesService.fetchComics().subscribe((comics) => {
      let thumbnailSrc: string;
      let hrefSrc: string;
      this.arrAllComicsVisuals = []; //reset array

      comics.forEach((row) => {

        thumbnailSrc = `assets/resources/comics/${row.resourceFilePrefix}_thumbnail.png`
        hrefSrc = `assets/resources/comics/${row.resourceFilePrefix}_image.png`

        this.arrAllComicsVisuals.push({
          title: row.resourceTitle,
          thumnailSrc: thumbnailSrc,
          url: hrefSrc,
          urlSafe: hrefSrc
        });

      });//end for loop

      this.onClickViewMoreVisuals(this. arrAllComicsVisuals,  this.arrVisibleComicsVisuals);

    });
  }//end method

  private loadSlowDownVideos() {
    this.resourcesService.fetchSlowDownVideos().subscribe((slowdownvideos) => {
      this.arrAllSlowDownVideosVisuals = []; //reset array
      slowdownvideos.forEach((row) => {

        console.log("URL: " + row.resourceFilePrefix);
        console.log("URL SAFE: " + this.sanitizer.bypassSecurityTrustResourceUrl(row.resourceFilePrefix));

        this.arrAllSlowDownVideosVisuals.push({
          title: row.resourceTitle,
          thumnailSrc: "", 
          url: row.resourceFilePrefix,
          urlSafe: this.sanitizer.bypassSecurityTrustResourceUrl(row.resourceFilePrefix)
        });

      });//end for loop

      this.onClickViewMoreVisuals(this.arrAllSlowDownVideosVisuals, this. arrVisibleSlowDownVisuals);

    });
  }//end method

  //used by the view more buttons and when the visuals are to to be view in batches
  public onClickViewMoreVisuals(arrAllVisuals: Visuals[], arrVisibleVisuals: Visuals[]) {
    let startIndex: number;
    if (arrVisibleVisuals.length == 0) {
      startIndex = 0;
    } else {
      if (arrVisibleVisuals.length < arrAllVisuals.length) {
        startIndex = arrVisibleVisuals.length; //from last added  
      } else {
        return;
      }//end inner if
    }//end if

    this.addElementsToVisibleResources(arrAllVisuals, arrVisibleVisuals, startIndex);
    
    this.bShowloadMoreComicsButton = this.arrVisibleComicsVisuals.length < this.arrAllComicsVisuals.length;
    this.bShowloadMoreSlowDownVideosButton = this.arrVisibleSlowDownVisuals.length < this.arrAllSlowDownVideosVisuals.length;

  }//end method

  private addElementsToVisibleResources(arrAllVisuals: Visuals[], arrVisibleVisuals: Visuals[], startIndex: number) {
    let index: number;
    let counter: number = 0;
    for (index = startIndex; index < arrAllVisuals.length; index++) {
      if (counter == this.numOfResourcesToShow) {
        break;
      }//end if 
      arrVisibleVisuals.push(arrAllVisuals[index]);
      counter++;
    }//end for loop
  }//end method

}//end class
