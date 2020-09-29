import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  blogRoutes: ScullyRoute[];

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.scully.available$.subscribe((routes) => {
      this.blogRoutes = routes.filter((route) => route.route.startsWith("/blog/"));
    });
  }

  stringify(obj: any) {
    return JSON.stringify(obj);
  }

}
