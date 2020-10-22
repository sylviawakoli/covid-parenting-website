import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Language, TipSheet, LanguageCSVRow } from './tip-sheets.model';
import { HttpClient } from '@angular/common/http';
import { SpreadsheetService } from '../shared/services/spreadsheet.service';
import { TipSheetService } from './tip-sheet.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tip-sheets',
  templateUrl: './tip-sheets.component.html',
  styleUrls: ['./tip-sheets.component.scss']
})
export class TipSheetsComponent implements OnInit, OnChanges {
  @Input()
  currentLanguage: Language = {
    code: "en",
    name: "English"
  };
  @Input()
  viewAllTipSheets: boolean = false;//used to indicate if the component will show all tipsheets
  @Input()
  maxTipSheetsToShow: number = 6;//used to show tipsheets in batches

  allLanguages: Language[] = [];
  selectedRange: string[] = ["A", "F"];
  letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"]];
  dropdownLanguages: Language[] = [];

  tipSheetsByLanguage: { [langCode: string]: TipSheet[] } = {};

  tipSheets: TipSheet[] = [];//holds all the tipsheets from the server
  visibleTipSheets: TipSheet[] = [];//holds the tipsheets being view
  showloadMoreButton: boolean = false;
  tipSheetsSubscription: Subscription;


  constructor(private tipSheetService: TipSheetService, private activatedRoute: ActivatedRoute) {
    this.tipSheetService.getLanguages().subscribe((languages) => {
      this.allLanguages = languages;
      this.onLetterRangeClick(this.letterRanges[0], false);
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentLanguage) {
      this.changeLanguage(changes.currentLanguage.currentValue);
    }
  }

  changeLanguage(language: Language) {
    console.log("Change language ", language);
    this.currentLanguage = language;
    if (this.tipSheetsSubscription) {
      this.tipSheetsSubscription.unsubscribe();
    }
    this.tipSheetsSubscription = this.tipSheetService.getTipSheetsForLanguage(language.code).subscribe((sheets) => {
      this.tipSheets = sheets;
      console.log("Tip sheets set", sheets);
      this.visibleTipSheets = [];
      if (this.viewAllTipSheets) {
        this.visibleTipSheets = this.tipSheets;
      } else {
        this.viewMoreTipSheets()
      }
      this.activatedRoute.url.subscribe((urlSegments) => {
        console.log("Activated route url segments", urlSegments);
        let path = urlSegments[0].path;
        if (history.pushState && path.indexOf("tips") > -1) {
          var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?langCode=${language.code}`;
          window.history.pushState({path:newurl},'',newurl);
        }
      });
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

  //used by the view more button and when the tip sheets are to to be view in batches
  public viewMoreTipSheets() {
    if (this.visibleTipSheets.length == 0) {
      this.addElementsToVisibleTipSheets(0);
    } else if (this.visibleTipSheets.length > 0) {
      if (this.visibleTipSheets.length < this.tipSheets.length) {
        //from last added  
        this.addElementsToVisibleTipSheets(this.visibleTipSheets.length );
      }//end inner if
    }//end if

    this.showloadMoreButton = this.visibleTipSheets.length < this.tipSheets.length;
  }//end method

  private addElementsToVisibleTipSheets(startIndex: number) {
    let index: number;
    let counter: number = 0;
    for (index = startIndex; index < this.tipSheets.length; index++) {
      if (counter == this.maxTipSheetsToShow) {
        break;
      }//end if 
      this.visibleTipSheets.push(this.tipSheets[index]);
      counter++;
    }//end for loop
  }//end method

  public openTipSheetPDF(tipSheet: TipSheet) {
    window.open(tipSheet.pdfSrc, "__blank");
  }

}//end class

