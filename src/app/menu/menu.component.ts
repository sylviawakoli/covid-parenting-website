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
  { name: "HOME", href: "/" },

  {
    name: "ABOUT US",
    href: "/aboutus",
    subMenuItems: [
      { name: "Partners & Funders", href: "/aboutus" },
      { name: "Contributors", href: "/contributors" }
    ]
  },

  {
    name: "RESOURCES",
    href: "/resources",
    subMenuItems: [
      { name: "Parenting Tips", href: "/tips" },
      { name: "Tips For Caseworkers", href: "/caseworkers" },
      { name: "Public Service Announcements", href: "/psa" },
      { name: "Digital Parenting", href: "/digitalparenting" },
      { name: "Audiovisual Resources", href: "/audiovisuals" },
      { name: "Faith-Based Resources", href: "/faithleaders" },
      { name: "Social Media", href: "/socialmedia" },
      /**   {
          name: "Radio Scripts",
          href: "/tips",
          fragment: "radio"
        },**/
    ]
  },

  { 
    name: "IMPACT",
    href: "/impact",
    subMenuItems: [
      { name: "Reach by Region", href: "/impact" },
      { name: "Reach by Dissemination Method", href: "/impact" },
      { name: "Impact Stories", href: "/impactstories" },
      { name: "Champions of Children", href: "/impactchampions" }
    ]
  },

  {
    name: "NEWS",
    href: "/news-main",
    subMenuItems: [
      { name: "Updates", href: "/news" },
      { name: "Newsletters", href: "/newsletters" },
      { name: "Webinars", href: "/webinars" }
    ]
  },
  
  { name: "TELL US WHAT YOU THINK", 
  href: "/contactus",
  subMenuItems: [
    { name: "Parents Survey",  href: "/contactus" },
    { name: "Champions of Children Survey",  href: "/contactus" },
    { name: "Teens App Survey", href: "/contactus" },
  ]
}
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

