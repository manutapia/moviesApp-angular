import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';

declare var Swiper: any;

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() cast:Cast[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    const swiper = new Swiper('.swiper',{
      slidesPerView:5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
