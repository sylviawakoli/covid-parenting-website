import { Component } from '@angular/core';
import { SpreadsheetService } from './shared/services/spreadsheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-parenting-website';
  cities = [];

  constructor(private spreadsheetService: SpreadsheetService) {
    this.spreadsheetService.getCSVObjects("assets/cities.csv")
      .subscribe((cities) => {
        this.cities = cities;
        console.log("Cities?", cities);
      });
  }
}
