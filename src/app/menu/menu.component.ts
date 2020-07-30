import { Component, OnInit } from '@angular/core';

//todo. this needs to be globalised
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "Tips", href: "/tips" },
  { name: "Caseworkers", href: "/caseworkers" },
  { name: "Announcements", href: "/psa" },
  { name: "Contributors", href: "/contributors" },
  { name: "Contact us", href: "/contactus" }
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
