import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string,
  href?: string,
  fragment?: string,
  subMenuItems?: MenuItem[],
  subMenuOpen?: boolean
};

//todo. this needs to be globalised
const MENU_ITEMS: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Resources",
    href: "/tips",
    subMenuItems: [
      {
        name: "Parenting Tips",
        href: "/tips"
      },
      {
        name: "Radio Scripts",
        href: "/tips",
        fragment: "radio"
      }
    ]
  },
  { name: "Caseworkers", href: "/caseworkers" },
  {
    name: "Public Announcements",
    href: "/psa",
    subMenuItems: [
      {
        name: "PSA's",
        href: "/psa"
      },
      {
        name: "Blog",
        href: "/blog"
      }
    ]
  },
  { name: "Contributors", href: "/contributors" },
  { name: "Contact Us", href: "/contactus" }
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

  mouseEnterMenuItem($event, item: MenuItem) {
    if (item.subMenuItems) {
      item.subMenuOpen = true;
    }
  }

  mouseLeaveMenuItem($event, item: MenuItem) {
    item.subMenuOpen = false;
  }
}

