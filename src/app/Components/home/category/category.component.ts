import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsorgapiserviceService } from 'src/app/Services/newsorgapiservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  warning : string = '';
  typesOfShoes: string[] = ['general', 'entertainment', 'sports', 'business', 'health' , 'science' , 'technology'];
  constructor(private router : Router , private service : NewsorgapiserviceService) { }

  ngOnInit() {
  }

  Selected(value : string){

 if(value == null){
   this.warning = 'Please Select';
 }else{
  this.service.NewsCatagory = value;
  this.router.navigateByUrl("/home");
 }
  }

}
