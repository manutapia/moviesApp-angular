import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { NowPlayingResponse } from "../interfaces/now-playing-response";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=d9a6f1562d85807696cd23875a6076fd&language=en-US&page=1"

  constructor(private http: HttpClient) { }

  getNowPlaying():Observable<NowPlayingResponse>{
    return this.http.get<NowPlayingResponse>(this.url);
  }
}
