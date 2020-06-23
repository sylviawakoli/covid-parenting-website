import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';

export type LanguageCSVRow = {
  languageCode: string,
  languageName: string,
  tipSheetNumber: number,
  title: string
};

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  langCode = "af";

  tipSheets: { title: string, thumnailSrc: string; pdfSrc: string }[] = [];

  constructor(private http: HttpClient, private spreadsheetService: SpreadsheetService) {
    this.spreadsheetService.getCSVObjects("/assets/tip_sheets/tipSheetNames.csv").subscribe((rows: LanguageCSVRow[]) => {
      let currentLanguageRows = rows.filter((row) => row.languageCode === this.langCode);
      this.tipSheets = currentLanguageRows.map((row) => {
        return {
          title: row.title,
          thumnailSrc: `/assets/images/tip_sheet_thumbnails/${row.tipSheetNumber}.webp`,
          pdfSrc: `/assets/tip_sheets/${this.langCode}/${row.tipSheetNumber}.pdf`
        };
      })
    });
  }

  ngOnInit(): void {
  }

}
