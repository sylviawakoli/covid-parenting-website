import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';
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

  private numOfResourcesToShow: number = 3;//used to show resources in batches

  public arrAllComicsVisuals: Visuals[] = [];
  public arrVisibleComicsVisuals: Visuals[] = [];
  public bShowloadMoreComicsButton: boolean = false;

  public arrAllSlowDownVideosVisuals: Visuals[] = [];
  public arrVisibleSlowDownVisuals: Visuals[] = [];
  public bShowloadMoreSlowDownVideosButton: boolean = false;

  public arrAllAudioPlayTogether: Visuals[] = [];
  public arrVisiblePlayTogether: Visuals[] = [];
  public bShowloadMoreAudioPlayTogether: boolean = false;

  public arrAllAudioKeepPositive: Visuals[] = [];
  public arrVisibleAudioKeepPositive: Visuals[] = [];
  public bShowloadMoreAudioKeepPostive: boolean = false;

  public arrAllAudioSharing: Visuals[] = [];
  public arrVisibleAudioSharing: Visuals[] = [];
  public bShowloadMoreAudioSharing: boolean = false;

  constructor(private resourcesService: ResourcesService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.loadComics();
    this.loadSlowDownVideos();
    this.loadAudioPack("audioplaytogether");
    this.loadAudioPack("audiokeepitpositive");
    this.loadAudioPack("audiosharingiscaring");
  }

  private loadComics() {
    this.resourcesService.fetchResourcesByType("comics").subscribe((comics) => {
      let thumbnailSrc: string;
      let hrefSrc: string;
      this.arrAllComicsVisuals = []; //reset array
      this.arrVisibleComicsVisuals = [];

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

      this.onClickViewMoreVisuals(this.arrAllComicsVisuals, this.arrVisibleComicsVisuals);

    });
  }//end method

  private loadSlowDownVideos() {
    this.resourcesService.fetchResourcesByType("slowdownvideo").subscribe((slowdownvideos) => {
      this.arrAllSlowDownVideosVisuals = []; //reset array
      this.arrVisibleSlowDownVisuals = [];

      slowdownvideos.forEach((row) => {
        this.arrAllSlowDownVideosVisuals.push({
          title: row.resourceTitle,
          thumnailSrc: "",
          url: row.resourceFilePrefix,
          urlSafe: this.sanitizer.bypassSecurityTrustResourceUrl(row.resourceFilePrefix)
        });

      });//end for loop

      this.onClickViewMoreVisuals(this.arrAllSlowDownVideosVisuals, this.arrVisibleSlowDownVisuals);

    });
  }//end method

  private loadAudioPack(audiopacktype: string) {
    this.resourcesService.fetchResourcesByType(audiopacktype).subscribe((audios) => {
      let hrefSrc: string;
      let hrefSrcPrefix: string;
      let arrAll: Visuals[] = [];
      let arrVisible: Visuals[] = [];

      if (audiopacktype === "audioplaytogether") {
        this.arrAllAudioPlayTogether = [];
        this.arrVisiblePlayTogether = [];
        arrAll = this.arrAllAudioPlayTogether;
        arrVisible = this.arrVisiblePlayTogether;
        hrefSrcPrefix = "assets/resources/audios/play_together/";
      } else if (audiopacktype === "audiokeepitpositive") {
        this.arrAllAudioKeepPositive = [];
        this.arrVisibleAudioKeepPositive = [];
        arrAll = this.arrAllAudioKeepPositive;
        arrVisible = this.arrVisibleAudioKeepPositive;
        hrefSrcPrefix = "assets/resources/audios/keep_it_positive/";
      } else if (audiopacktype === "audiosharingiscaring") {
        this.arrAllAudioSharing = [];
        this.arrVisibleAudioSharing = [];
        arrAll = this.arrAllAudioSharing;
        arrVisible = this.arrVisibleAudioSharing;
        hrefSrcPrefix = "assets/resources/audios/sharing_is_caring/";
      }

      audios.forEach((row) => {

        hrefSrc = hrefSrcPrefix + row.resourceFilePrefix;
        //hrefSrc = `${hrefSrcPrefix}${row.resourceFilePrefix}`;

        arrAll.push({
          title: row.resourceTitle,
          thumnailSrc: "assets/resources/audios/audio_thumbnail.png",
          url: hrefSrc,
          urlSafe: hrefSrc
        });

      });//end for loop

      this.onClickViewMoreVisuals(arrAll, arrVisible);

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
    this.bShowloadMoreAudioPlayTogether = this.arrVisiblePlayTogether.length < this.arrAllAudioPlayTogether.length;
    this.bShowloadMoreAudioKeepPostive = this.arrVisibleAudioKeepPositive.length < this.arrAllAudioKeepPositive.length;
    this.bShowloadMoreAudioSharing = this.arrVisibleAudioSharing.length < this.arrAllAudioSharing.length;
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