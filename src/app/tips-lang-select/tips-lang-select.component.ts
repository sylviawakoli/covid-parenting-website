import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language } from '../tip-sheets/tip-sheets.model';

@Component({
  selector: 'app-tips-lang-select',
  templateUrl: './tips-lang-select.component.html',
  styleUrls: ['./tips-lang-select.component.scss']
})
export class TipsLangSelectComponent implements OnInit {

  @Input() currentLang: Language = { code: "en", name: "English" };
  @Output() onLangChange: EventEmitter<Language> = new EventEmitter();
  languages: Language[] = [
    { code: "en", name: "English" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
