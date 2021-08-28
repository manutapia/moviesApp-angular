import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';

declare var Swiper: any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input() movies:Movie[]

  private swiper:any;
  private interval;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.swiper= new Swiper('.swiper', {
      loop: true,
    });
    setInterval(()=>{
      this.onSlideNext();
    },5000)
  }

  ngOnDestroy():void{
    clearInterval(this.interval)
  }

  onSlidePrev(){
    this.swiper.slidePrev()
  }
  onSlideNext(){
    this.swiper.slideNext()
  }

}
