import { Component, OnInit} from '@angular/core';
import { NewsorgapiserviceService } from 'src/app/Services/newsorgapiservice.service';


import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit  {
 newsapi : any;
 news : any = [];
 title = "Example Angular 10 Material Dialog";
  constructor(public newsOrgService : NewsorgapiserviceService, private router : Router) { }


  ngOnInit(){
  this.newsOrgService.getData().subscribe(
      data=>{
        this.newsapi = data
        this.news = this.newsapi.articles;
      }
    )
  }

  openurl(url : any){
    window.open(url);
  }


  //for Firebase
  bookmarkfn(title : string , description : string , url : any , urltoimage : any , content : string){
      console.log(title+"\n"+description+"\n"+url+"\n"+urltoimage+"\n"+content);
  }

}


