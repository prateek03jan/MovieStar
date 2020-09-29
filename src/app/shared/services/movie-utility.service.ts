import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieUtilityService extends BaseService {

  constructor(private httpClient: HttpClient) { super(); }

  searchMovies(searchMovie: string) {
    return this.httpClient.get(this.url + 't=' + searchMovie);
  }

  getMovieByYear(searchMovie: string, year: string) {
    return this.httpClient.get(this.url + 't=' + searchMovie + '&y=' + year);
  }
}
