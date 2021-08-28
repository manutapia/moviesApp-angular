import { Component, HostListener, OnInit } from '@angular/core';

import { Movie } from "../../interfaces/now-playing-response";

import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies:Movie[] = [];
  public moviesSlideshow:Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1400;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight );
    if (pos > max) {      
      this._moviesService.getNowPlaying().subscribe(nowPlaying=>{
        this.movies.push(...nowPlaying);
      });
    }

  }

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getNowPlaying().subscribe(
      nowPlaying=>{
        this.movies = nowPlaying;
        this.moviesSlideshow = nowPlaying;
      }
    )
  }

}
