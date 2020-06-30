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

  currentLanguage: Language = {
    code: "en",
    name: "English"
  };

  constructor(private route: ActivatedRoute, private tipSheetSerivce: TipSheetService) {
    this.route.params.subscribe((paramMap) => {
      if (paramMap["langCode"]) {
        this.tipSheetSerivce.getLanguageByCode(paramMap["langCode"])
          .subscribe((lang) => {
            this.currentLanguage = lang;
          });
      }
    });
  }

}
