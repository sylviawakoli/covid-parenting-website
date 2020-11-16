import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        gtag('config', 'UA-171116573-2',
          {
            'page_path': event.urlAfterRedirects
            //todo. we can add more parameter values here like page_title
          }
        );
      }
    }
    );
  }

  ngOnInit() {
    AOS.init();
  }

}
