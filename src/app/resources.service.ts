import { Injectable } from '@angular/core';
import { SpreadsheetService } from './shared/services/spreadsheet.service';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

export type Resource = {
  resourceType: string;
  resourceTitle: string;
  resourceFilePrefix: string;
  resourceLanguageName: string;
  resourceLanguageCode: string;
};

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private arrResources: Resource[] = [];

  constructor(private spreadsheetService: SpreadsheetService) {

    //get all the resources and fill to the array
    this.fetchAllResources().subscribe((resources) => {
      this.arrResources = resources;
      console.log("RESOURCES LOADED: " + resources.length);
    });

  }

  private fetchAllResources(): Observable<Resource[]> {
    return this.spreadsheetService.getCSVObjects("assets/resources/resources_list.csv")
      .pipe(
        shareReplay(1),
        map((rows: Resource[]) => {
          return rows;
        }));
  }//end method


  public fetchComics(): Observable<Resource[]> {
    let arr: Resource[] = [];
    this.arrResources.forEach((row) => {
      try {
        if (row.resourceType.toLowerCase() === "comics") {
          arr.push(row);
        }
      } catch (ex) {
        console.log("Error in fetching comics: " +(ex as Error).message);
      }

    });

    return of(arr);
  }//end method

  public fetchSlowDownVideos(): Observable<Resource[]> {
    let arr: Resource[] = [];
    this.arrResources.forEach((row) => {
      try {
        if (row.resourceType.toLowerCase() === "slowdownvideo") {
          arr.push(row);
        }
      } catch (ex) {
        console.log("Error in fetching slowdown videos: " + (ex as Error).message);
      }

    });

    return of(arr);
  }//end method

  





}//end class
