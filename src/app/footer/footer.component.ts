import { Component, OnInit,Input } from '@angular/core';

//todo. these menus should come from a global service
const MENU_ITEMS: { name: string, href?: string }[] = [
  { name: "About us", href: "/aboutus" },
  { name: "Resources", href: "/resources" }
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
