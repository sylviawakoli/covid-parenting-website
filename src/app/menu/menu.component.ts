import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

//todo. this needs to be globalised
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "Tips", href: "/tips" },
  { name: "For Caseworkers", href: "/caseworkers" },
  { name: "Public Service Announcements", href: "/psa" },
  { name: "Contributors", href: "/contributors" },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 60 * MENU_ITEMS.length + 'px',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('* => closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {

  menuDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

  //todo. function that listens for on clicks of the items for web tracking

}
