import { Component, OnInit } from '@angular/core';
import { NewsorgapiserviceService } from 'src/app/Services/newsorgapiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 newsapi : any;
 news : any = [];
  constructor(private newsOrgService : NewsorgapiserviceService) { }

  ngOnInit(){
  this.newsOrgService.getData().subscribe(
      data=>{
        this.newsapi = data
        this.news = this.newsapi.articles;
      }
    )
  }

}
