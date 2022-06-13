import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interface/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slidesshow',
  templateUrl: './cast-slidesshow.component.html',
  styleUrls: ['./cast-slidesshow.component.css']
})
export class CastSlidesshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  ngOnInit(): void {
    console.log(this.cast)
  }

}
