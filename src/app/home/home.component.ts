import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'covid-parenting-website';
  cities = [];

  constructor(private spreadsheetService: SpreadsheetService) {
    this.spreadsheetService.getCSVObjects("assets/cities.csv")
      .subscribe((cities) => {
        this.cities = cities;
        console.log("Cities?", cities);
      });
  }

  ngOnInit(): void {
  }

}
