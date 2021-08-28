import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";

import { Movie, NowPlayingResponse } from "../interfaces/now-playing-response";
import { MovieDetailsResponse } from "../interfaces/movie-details-response";
import { Cast, CreditsResponse } from "../interfaces/credits-response";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl:string = "https://api.themoviedb.org/3"
  private nowPlayingPage = 1;
  private loading = false;

  constructor(private http: HttpClient) { }

  get params(){
    return {
      api_key: 'd9a6f1562d85807696cd23875a6076fd',
      languaje: 'en-US',
      page: this.nowPlayingPage.toString()
    }
  }

  resetNowPlayingPage(){
    this.nowPlayingPage = 1;
  }

  getNowPlaying():Observable<Movie[]>{
    
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    console.log(this.loading)
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map(resp=> resp.results),
      tap(()=>{
        this.nowPlayingPage += 1;
        this.loading = false;
      })
    )
  }

  searchMovies(text:string):Observable<Movie[]>{
    const params = {...this.params, page:'1', query:text };
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/search/movie`,{
      params
    }).pipe(
      map( resp => resp.results )
    );
  }

  getMovieDetails(id:string):Observable<MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    })
  }
}
