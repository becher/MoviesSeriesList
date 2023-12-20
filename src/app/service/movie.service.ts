import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environements/environment';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { ListResult } from '../models/list-result.interface';

/**
 * Service class for interacting with the Movie API.
 * @class MovieService
 * @constructor
 * @param {string} baseUrl - The base URL of the Movie API.
 * @param {string} apiKey - The API key for accessing the Movie API.
 * @param {string} language - The language to use for movie data.
 * @param {string} region - The region to use for movie data.
 */
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

  /**
   * Retrieves a list of movies with the specified page number.
   * @param {number} page - The page number to retrieve movies from.
   * @returns {Observable<ListResult<Movie>>} - An observable that emits a list of movies.
   */
  getAllMoviesWithPageNumber({ page }: { page: number; }) : Observable<ListResult<Movie>>{
    return this.http.get<ListResult<Movie>>(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`); 
   
  }

  /**
   * Searches for movies based on the given search string and page number.
   * @param {string} searchStr - The search string to query movies.
   * @param {number} page - The page number of the search results.
   * @returns {Observable<ListResult<Movie>>} - An observable that emits a list of movies.
   */
  searchMovies({ searchStr, page }: { searchStr: string; page: number; }): Observable<ListResult<Movie>> {
    return this.http.get<ListResult<Movie>>(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  /**
   * Retrieves a movie by its ID from the API.
   * @param {number} id - The ID of the movie to retrieve.
   * @returns {Observable<Movie>} - An observable that emits the movie data.
   */
  getMovieById({ id }: { id: number; }): Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

}
