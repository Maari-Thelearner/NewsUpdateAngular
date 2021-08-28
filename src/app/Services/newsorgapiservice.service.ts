import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsorgapiserviceService {
private baseurl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=50cd87a239064bb39c8d5c4343253080";
  constructor(private http : HttpClient) { }

  getData(){
    let response = this.http.get(this.baseurl);
    return response;
  }
}
