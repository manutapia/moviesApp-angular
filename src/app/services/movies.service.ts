import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";

import { Movie, NowPlayingResponse } from "../interfaces/now-playing-response";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl:string = "https://api.themoviedb.org"
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

  getNowPlaying():Observable<Movie[]>{
    
    if (this.loading) {
      return of([]);
    }

    this.loading = true;
    console.log(this.loading)
    return this.http.get<NowPlayingResponse>(`${this.baseUrl}/3/movie/now_playing`,{
      params: this.params
    }).pipe(
      map(resp=> resp.results),
      tap(()=>{
        this.nowPlayingPage += 1;
        this.loading = false;
      })
    )
  }
}
