import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialMediaIconsComponent implements OnInit {

  @Input() placement: "toolbar" | "mobile-menu" | "footer" = "toolbar";

  constructor() { }

  ngOnInit(): void {
  }

}
