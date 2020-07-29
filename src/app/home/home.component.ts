import { Component, OnInit } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';
import{WebAnalyticsService} from '../web-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Covid Parenting Website';

  tipSheetLang: Language = {
    code: "en",
    name: "English"
  };

  constructor(public webAnalyticsService: WebAnalyticsService) {
  }

  ngOnInit(): void {
  }

  //event handler for tracking.
 public SendDownloadTipSheetsEvent(){ 
    this
    .webAnalyticsService
    .eventEmitter("tipsheets_downloads", "downloads", "downloads");
  }

}
