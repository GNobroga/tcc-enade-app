import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {

  slideOptions: SwiperOptions = {
    loop: true,
    scrollbar: true,
    speed: 400,
    slidesPerView: 1,
  }

  constructor() { }

  ngOnInit() {}

}
