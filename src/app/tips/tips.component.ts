import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Observable } from 'rxjs';
import { Language } from '../tip-sheets/tip-sheets.model';
import { ActivatedRoute } from '@angular/router';
import { TipSheetService } from '../tip-sheets/tip-sheet.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent {

  tipSheetLang: Language = {
    code: "en",
    name: "English"
  };

  constructor(private route: ActivatedRoute, private tipSheetSerivce: TipSheetService) {
    this.route.queryParams.subscribe((paramMap) => {
      //console.log(paramMap);
      if (paramMap["langCode"]) {
        this.tipSheetSerivce.getLanguageByCode(paramMap["langCode"])
          .subscribe((lang) => {
            if (lang) {
              this.tipSheetLang = lang;
            } else {
              this.tipSheetLang = {
                code: "en",
                name: "English"
              };
            }
          });
      } else if (paramMap["langName"]) {
        this.tipSheetSerivce.searchForLanguageByName(paramMap["langName"])
          .subscribe((lang) => {
            if (lang) {
              this.tipSheetLang = lang;
            } else {
              this.tipSheetLang = {
                code: "en",
                name: "English"
              };
            }
          });
      }
    });
  }

}
