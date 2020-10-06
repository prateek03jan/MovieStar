import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUtilityService extends BaseService {

  constructor(private httpClient: HttpClient) { super(); }

  // getImageColors(_imageUrl: string) {
  //   // return this.httpClient.get(this.imageUrl + encodeURIComponent(_imageUrl));
  //   var request = require('request'),
  //     apiKey = 'acc_a4237b5f52339d2',
  //     apiSecret = '677a895e66c52e4ed048ce0c90491c9b';
  //   request.get('https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(_imageUrl), function (error, response, body) {
  //     debugger;
  //     console.log('Status:', response.statusCode);
  //     console.log('Headers:', JSON.stringify(response.headers));
  //     console.log('Response:', body);
  //   }).auth(apiKey, apiSecret, true);

  // }
}
