import { Component, OnInit,Input } from '@angular/core';

//todo. these menus should come from a global service
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "About Us", href: "/aboutus" },
  { name: "Impact", href: "/impact" },
  { name: "Contact Us", href: "/contactus" }
]; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();
  menuItems = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
