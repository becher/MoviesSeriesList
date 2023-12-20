import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environements/environment';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { ListResult } from '../models/list-result.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) { 
    this.apiKey = `${environment.theMovieDBApiKey}`;
    this.baseUrl = `${environment.theMovieDBApiUrl}`;
    this.language = 'en-US';
    this.region = 'US';
  }

  getAllMoviesWithPageNumber(page: number) : Observable<ListResult<Movie>>{
    return this.http.get<ListResult<Movie>>(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`); 
   
  }

  searchMovies(searchStr: string, page:number): Observable<ListResult<Movie>> {
    return this.http.get<ListResult<Movie>>(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`);
  }

}
