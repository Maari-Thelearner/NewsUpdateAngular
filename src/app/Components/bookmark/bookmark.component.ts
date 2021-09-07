import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';

export interface Shirt {
content : string;
description : string;
title : string;
url : string;
urltoimage : string;
emailid : string;
}
export interface ShirtId extends Shirt { id: string; }


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  private shirtCollection !: AngularFirestoreCollection<Shirt>;
  shirts!: Observable<ShirtId[]>;
  email : string = this.fireAuthService.authState.email;
  value : any = [];
  buttonVisible : boolean = false;
  notFoundVisible : boolean = false;
  constructor(private fireStore : AngularFirestore,private fireAuthService : FirebaseserviceService , private router : Router) { }

  ngOnInit() : void {
   this.getData();
  }



  openurl(url : string){
    window.open(url);
  }

  getData(){
    this.shirtCollection = this.fireStore.collection('bookmark');
    this.shirts = this.shirtCollection.snapshotChanges().pipe(
      map(actions=>actions.map(a=>{
          const data = a.payload.doc.data() as Shirt;
          const id = a.payload.doc.id;
          if(data.emailid != this.email){
            this.buttonVisible = false;
            this.notFoundVisible = true;
          }else{
            this.buttonVisible = true;
            this.notFoundVisible = false;
          }
          return { id, ...data };
      }
      ))
    )
  }

  deleteALL(){
    this.fireStore.collection('bookmark').ref.where('emailid' , '==' , this.email)
    .get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        doc.ref.delete();
      })
    }).then(()=>{
      this.router.navigateByUrl('/home');
    })
  }



}
