import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';

@Component({
  selector: 'app-tips-lang-select',
  templateUrl: './tips-lang-select.component.html',
  styleUrls: ['./tips-lang-select.component.scss']
})
export class TipsLangSelectComponent implements OnInit {

  @Input() currentLanguage: Language = { code: "en", name: "English" };
  @Output() onLanguageChange: EventEmitter<Language> = new EventEmitter();

  @Input() languages: Language[] = [{ code: "en", name: "English" }];
  selectedRange: string[] = ["C", "F"];
  letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"]];
  dropdownLanguages: Language[] = [];

  constructor() { }

  ngOnInit(): void {
    this.onLetterRangeClick(this.letterRanges[0], false);
  }

  onLetterRangeClick(range: string[], changeLang: boolean = true) {
    let lowerLetter = range[0].toLowerCase();
    let higherLetter = range[1].toLowerCase();
    this.selectedRange = range;
    this.dropdownLanguages = this.languages.filter((lang) => {
      let firstLetter = lang.name.toLowerCase()[0];
      return firstLetter >= lowerLetter && firstLetter <= higherLetter;
    });
    if (changeLang && this.dropdownLanguages.length > 0) {
      this.onLanguageChange.emit(this.dropdownLanguages[0]);
    }
  }

  onLanguageClick(language: Language) {
    this.currentLanguage = language;
    this.onLanguageChange.emit(language);
  }
  

}
