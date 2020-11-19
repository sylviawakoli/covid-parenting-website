import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public slideIndex: number = 1;

  constructor() { }

 ngOnInit(): void {
  this.showSlides(this.slideIndex);    
}

ngAfterViewInit(){

}

public plusSlides(n: number ) {
  this.showSlides(this.slideIndex += n);
}

public showSlides(n: number) {
  let i: number;
  let slides: any = document.getElementsByClassName("banner-slide");
  
  if (n > slides.length) {
    this.slideIndex = 1;
  }

  if (n < 1) {
    this.slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[this.slideIndex-1].style.display = "block";  
}


}
