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
  public cast:Cast[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _moviesService:MoviesService, private location:Location, private router:Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this._moviesService.getMovieDetails(id).subscribe(movie=>{
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
    })
    
    this._moviesService.getCast(id).subscribe(cast=>{
      this.cast = cast;
    })

  }

  onBack(){
    this.location.back()
  }

}
