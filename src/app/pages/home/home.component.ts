import { Component, OnInit } from '@angular/core';

import { Movie } from "../../interfaces/now-playing-response";

import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies:Movie[] = []

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {
    this._moviesService.getNowPlaying().subscribe(
      nowPlaying=>{
        this.movies = nowPlaying.results;
      }
    )
  }

}
