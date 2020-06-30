import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Language, TipSheet, LanguageCSVRow } from './tip-sheets.model';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { TipSheetService } from './tip-sheet.service';

@Component({
  selector: 'app-tip-sheets',
  templateUrl: './tip-sheets.component.html',
  styleUrls: ['./tip-sheets.component.scss']
})
export class TipSheetsComponent implements OnInit, OnChanges {

  allLanguages: Language[] = [];
  selectedRange: string[] = ["A", "F"];
  letterRanges: string[][] = [["A", "F"], ["G", "L"], ["M", "R"], ["S", "Z"]];
  dropdownLanguages: Language[] = [];

  @Input()
  currentLanguage: Language = {
    code: "en",
    name: "English"
  };

  tipSheetsByLanguage: { [langCode: string]: TipSheet[] } = {};

  tipSheets: TipSheet[] = [];

  constructor(private tipSheetService: TipSheetService) {
    this.tipSheetService.getLanguages().subscribe((languages) => {
      this.allLanguages = languages;
      this.onLetterRangeClick(this.letterRanges[0], false);
      this.changeLanguage(this.currentLanguage);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentLanguage) {
      this.changeLanguage(this.currentLanguage);
    }
  }

  changeLanguage(language: Language) {
    this.currentLanguage = language;
    this.tipSheetService.getTipSheetsForLanguage(language.code).subscribe((sheets) => {
      this.tipSheets = sheets;
    });
  }

  onLetterRangeClick(range: string[], changeLang: boolean = true) {
    let lowerLetter = range[0].toLowerCase();
    let higherLetter = range[1].toLowerCase();
    this.selectedRange = range;
    this.dropdownLanguages = this.allLanguages.filter((lang) => {
      let firstLetter = lang.name.toLowerCase()[0];
      return firstLetter >= lowerLetter && firstLetter <= higherLetter;
    });
    if (changeLang && this.dropdownLanguages.length > 0) {
      this.changeLanguage(this.dropdownLanguages[0]);
    }
  }

  ngOnInit(): void {
  }

}