import { Injectable } from '@angular/core';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Observable, of } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

export type ImpactSummary = {
  impactType: string;
  impactTitle: string;
  impactNumber: number;
  thumbnailSrc: string;
};

export type ImpactSummaryCSVRow = {
  impactType: string;
  impactTitle: string;
  impactNumber: number;
};

@Injectable({
  providedIn: 'root'
})
export class ImpactStoriesService {

  constructor(private spreadsheetService: SpreadsheetService) { }

  public fetchImpactSummaries(): Observable<ImpactSummary[]> {
    return this.spreadsheetService.getCSVObjects("assets/impacts/impact_summary.csv")
      .pipe(
        shareReplay(1),
        map((rows: ImpactSummaryCSVRow[]) => {
          let arrImpactSummaries: ImpactSummary[] = [];
          let thumbnailSrc: string;
          rows.forEach((row) => {
            //add row contents to the array
            if (row.impactType.toUpperCase() === "REGION") {
              thumbnailSrc = `assets/impacts/${row.impactTitle}.jpg`
            } else {
              thumbnailSrc= ""         
            }
            
            arrImpactSummaries.push({
              impactType: row.impactType,
              impactTitle: row.impactTitle,
              impactNumber: row.impactNumber,
              thumbnailSrc: thumbnailSrc
            });

          });

          return arrImpactSummaries;
        })
      );
  }




}
