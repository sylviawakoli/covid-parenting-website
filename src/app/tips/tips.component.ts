import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { Observable } from 'rxjs';

export type LanguageCSVRow = {
  languageCode: string,
  languageName: string,
  tipSheetNumber: number,
  title: string
};

type Language = { name: string, code: string };

type TipSheet = { title: string, thumnailSrc: string; pdfSrc: string };

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  allLanguages: Language[] = [];
  selectedRange: string[] = ["A", "F"];
  letterRanges: string[][] = [["A", "F"], ["G", "L"], ["M", "R"], ["S", "Z"]];
  dropdownLanguages: Language[] = [];

  currentLanguage: Language = {
    code: "en",
    name: "English"
  };

  tipSheetsByLanguage: { [langCode: string]: TipSheet[] } = {};

  tipSheets: TipSheet[] = [];

  constructor(private http: HttpClient, private spreadsheetService: SpreadsheetService) {
    this.fetchTipSheets();
  }

  fetchTipSheets() {
    this.spreadsheetService.getCSVObjects("/assets/tip_sheets/tipSheetNames.csv")
      .subscribe((rows: LanguageCSVRow[]) => {
        rows.forEach((row) => {
          let langCode = row.languageCode ? row.languageCode.toLowerCase().trim() : null;
          if (langCode !== null) {
            if (!this.tipSheetsByLanguage[langCode]) {
              this.tipSheetsByLanguage[langCode] = [];
              this.allLanguages.push({
                code: langCode,
                name: row.languageName
              });
            }
            this.tipSheetsByLanguage[langCode].push({
              title: row.title,
              thumnailSrc: `/assets/images/tip_sheet_thumbnails/${row.tipSheetNumber}.webp`,
              pdfSrc: `/assets/tip_sheets/${langCode}/${row.tipSheetNumber}.pdf`
            });
          }
        });
        this.allLanguages = this.allLanguages
          .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
        this.tipSheets = this.tipSheetsByLanguage[this.currentLanguage.code];
        this.onLetterRangeClick(this.letterRanges[0]);
        this.currentLanguage = {
          code: "en",
          name: "English"
        };
      });
  }

  changeLanguage(language: Language) {
    this.currentLanguage = language;
    this.tipSheets = this.tipSheetsByLanguage[this.currentLanguage.code];
  }

  onLetterRangeClick(range: string[]) {
    let lowerLetter = range[0].toLowerCase();
    let higherLetter = range[1].toLowerCase();
    this.selectedRange = range;
    this.dropdownLanguages = this.allLanguages.filter((lang) => {
      let firstLetter = lang.name.toLowerCase()[0];
      return firstLetter >= lowerLetter && firstLetter <= higherLetter;
    });
    if (this.dropdownLanguages.length > 0) {
      this.changeLanguage(this.dropdownLanguages[0]);
    }
  }

  ngOnInit(): void {
  }

}
