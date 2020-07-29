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
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuDropdownOpen: boolean = false;
  menuItems = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

 
  //todo. function that listens for on clicks of the items for web tracking


}
