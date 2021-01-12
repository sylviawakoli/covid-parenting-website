import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';

@Component({
  selector: 'app-tips-lang-select',
  templateUrl: './tips-lang-select.component.html',
  styleUrls: ['./tips-lang-select.component.scss']
})
export class TipsLangSelectComponent implements OnInit, OnChanges {

  @Input() currentLanguage: Language;
  @Output() onLanguageChange: EventEmitter<Language> = new EventEmitter();

  @Input() languages: Language[] = [{ code: "en", name: "English" }];
  selectedRange: string[] = ["C", "F"];
  letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"]];
  dropdownLanguages: Language[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.languages) {
      this.onLetterRangeClick(this.selectedRange, false);
    }
  }

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
      this.currentLanguage = this.dropdownLanguages[0];
      this.onLanguageChange.emit(this.dropdownLanguages[0]);
    }
  }

  onLanguageClick(language: Language) {
    this.currentLanguage = language;
    this.onLanguageChange.emit(language);
  }
  

}
