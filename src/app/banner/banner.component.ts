import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public slideIndex: number = 0; //current slide index

  public slides: any;

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.slides = this.elem.nativeElement.querySelectorAll('.banner-slide');
    this.showSlidesTimer();
  }

  private showSlidesTimer(): void {

    this.plusSlides(1);

    //start the timer
    setTimeout(() => {
      this.showSlidesTimer();
    }, 5000);
  }

  public plusSlides(n: number): void {
    this.showSlides(n);
  }

  private showSlides(n: number): void {
    let i: number;


    this.slideIndex = this.slideIndex + n;

    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }

    if (this.slideIndex < 1) {
      this.slideIndex = 1;
    }

    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex - 1].style.display = "block";
  }//end method


}
