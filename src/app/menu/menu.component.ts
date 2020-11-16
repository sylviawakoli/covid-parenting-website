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
        name: "Caseworkers",
        href: "/caseworkers",
      },
      {
        name: "Public Service Announcements",
        href: "/psa",
      },
      {
        name: "Digital Parenting",
        href: "/",
      },
      {
        name: "Audiovisual",
        href: "/",
      },
      {
        name: "Faith-Based Resources",
        href: "/",
      },
      {
        name: "Social Media",
        href: "/",
      },
    /**   {
        name: "Radio Scripts",
        href: "/tips",
        fragment: "radio"
      },**/
    ]
  },
  { name: "News", 
  href: "/" ,
  subMenuItems: [
    {
      name: "News",
      href: "/"
    },
    {
      name: "Newsletters",
      href: "/"
    },
    {
      name: "Webinars",
      href: "/"
    }
  ]
},

  {
    name: "About Us",
    href: "/",
    subMenuItems: [
      {
        name: "Our Work",
        href: "/"
      },
      {
        name: "Partners and Funders",
        href: "/"
      }
    ]
  },
  { name: "Impact", href: "/" },
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

