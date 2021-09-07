import { Component, OnInit} from '@angular/core';
import { NewsorgapiserviceService } from 'src/app/Services/newsorgapiservice.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit  {
 newsapi : any;
 news : any = [];

  constructor(public newsOrgService : NewsorgapiserviceService, private router : Router , private spinner : NgxSpinnerService,private fireStore : AngularFirestore,private authService : FirebaseserviceService,private snackbar : MatSnackBar , private logoutService : FirebaseserviceService , private users : AppComponent) { }


  ngOnInit(){
    this.spinner.show(undefined,{
      type : 'square-jelly-box',
      size : 'large',
      bdColor : '#002b5c',
      color : "#074A9F",
    });
  this.newsOrgService.getData().subscribe(
      data=>{
        this.newsapi = data
        this.news = this.newsapi.articles;
        this.spinner.hide();
      }
    )
  }

  openurl(url : any){
    window.open(url);
  }


  //for Firebase
  bookmarkfn(title : string , description : string , url : any , urltoimage : any , content : string){
      // console.log(title+"\n"+description+"\n"+url+"\n"+urltoimage+"\n"+content);
      if(this.authService.authState.email != null){
        this.fireStore.collection('bookmark').add({
          'emailid' : this.authService.authState.email,
        'title' : title,
        'description' : description,
        'url' : url,
        'urltoimage' : urltoimage,
        'content' : content
        }).then(()=>{
              this.snackbar.open('Bookmarked!!.','close',{
                panelClass : ['blue-snackbar']
              })
        })
      }
  }
}
