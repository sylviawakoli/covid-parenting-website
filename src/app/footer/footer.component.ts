import { Component, OnInit,Input } from '@angular/core';

//todo. these menus should come from a global service
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Home", href: "/" },
  { name: "Tips", href: "/tips" },
  { name: "For Caseworkers", href: "/caseworkers" },
  { name: "Public Service Announcements", href: "/psa" },
  { name: "Contributors", href: "/contributors" },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  footerBackgroundColor: String = "#000";

  menuItems = MENU_ITEMS;//todo. globalise source of menu items
 

  constructor() { }

  ngOnInit(): void {
  }

}
