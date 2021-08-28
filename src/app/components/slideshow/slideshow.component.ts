import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';

declare var Swiper: any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() movies:Movie[]

  private swiper:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.swiper= new Swiper('.swiper', {
      loop: true,
    });
  }

  onSlidePrev(){
    this.swiper.slidePrev()
  }
  onSlideNext(){
    this.swiper.slideNext()
  }

}
