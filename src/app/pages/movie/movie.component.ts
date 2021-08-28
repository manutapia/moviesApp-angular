import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieDetailsResponse } from 'src/app/interfaces/movie-details-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie:MovieDetailsResponse;
  public cast:Cast[];

  constructor(private activatedRoute:ActivatedRoute, private _moviesService:MoviesService, private location:Location) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this._moviesService.getMovieDetails(id).subscribe(movie=>{
      this.movie = movie;
    })
    

  onBack(){
    this.location.back()
  }

}
