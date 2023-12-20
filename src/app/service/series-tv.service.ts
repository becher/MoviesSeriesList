import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environment';
import { ListResult } from '../models/list-result.interface';
import { SeriesTv } from '../models/seriesTV.interface';

@Injectable({
  providedIn: 'root',
})
export class SeriesTVService {
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
   * Retrieves a list of TV series with the specified page number.
   * @param {number} page - The page number to retrieve.
   * @returns {Observable<ListResult<SeriesTv>>} - An observable that emits a list of TV series.
   */
  getAllSeriesTvWithPageNumber(page: number): Observable<ListResult<SeriesTv>> {
    return this.http.get<ListResult<SeriesTv>>(
      `${this.baseUrl}discover/tv?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  /**
   * Searches for TV series based on the given search string and page number.
   * @param {string} searchStr - The search string to query for TV series.
   * @param {number} page - The page number of the search results.
   * @returns {Observable<ListResult<SeriesTv>>} - An observable that emits a list of TV series.
   */
  searchSeriesTv(
    searchStr: string,
    page: number
  ): Observable<ListResult<SeriesTv>> {
    return this.http.get<ListResult<SeriesTv>>(
      `${this.baseUrl}search/tv?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  /**
   * Retrieves a TV series by its ID from the API.
   * @param {number} id - The ID of the TV series to retrieve.
   * @returns {Observable<SeriesTv>} - An observable that emits the TV series data.
   */
  getSerieTvById({ id }: { id: number }): Observable<SeriesTv> {
    console.log('gg')
    return this.http.get<SeriesTv>(
      `${this.baseUrl}tv/${id}?api_key=${this.apiKey}`
    );
  }
}
