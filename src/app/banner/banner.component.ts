import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public slideIndex: number = 1;

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
    }, 3000);
  }

  public plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  private showSlides(n: number): void {
    let i: number;

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    this.slides[this.slideIndex - 1].style.display = "block";
  }//end method


}
