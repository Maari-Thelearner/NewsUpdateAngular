import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsorgapiserviceService {
  Countrycode : string = 'in';
  Countryname : string = 'India';
  NewsCatagory : string = 'general';
  constructor(private http : HttpClient) { }

  getData(){
    let response = this.http.get("https://newsapi.org/v2/top-headlines?country="+this.Countrycode+"&category="+this.NewsCatagory+"&apiKey=50cd87a239064bb39c8d5c4343253080");
    console.log(this.Countrycode);

    return response;
  }
}
