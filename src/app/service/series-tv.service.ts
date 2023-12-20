import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environements/environment';
import { ListResult } from '../models/list-result.interface';
import { SeriesTv } from '../models/seriesTV.interface';

@Injectable({
  providedIn: 'root'
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

  getAllSeriesTvWithPageNumber(page: number) : Observable<ListResult<SeriesTv>>{
    return this.http.get<ListResult<SeriesTv>>(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`) 
   
  }
}
