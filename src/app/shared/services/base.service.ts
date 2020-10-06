import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public url: string = 'http://www.omdbapi.com/?apikey=1393a712&';

  public imageUrl: string = 'https://api.imagga.com/v2/colors?image_url=';
}
