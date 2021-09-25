import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  uid : any = 'loading';
  value : any[] = [];
  buttonVisible : boolean = false;
  notFoundVisible : boolean = true;
  panelOpenState = false;

  constructor(private fireStore : AngularFirestore, private router : Router , private firebaseAuth : AngularFireAuth) { }

  ngOnInit() : void {
    this.firebaseAuth.onAuthStateChanged((userState)=>{
      if(userState){
        this.uid = userState.uid;
      }
    }).then(()=>{
      this.getData();
    })

  }

  delete(contentId : any){
    this.fireStore.collection('bookmark').doc(contentId).delete().then(()=>{
      this.router.navigate(['home'])
    });
  }

  openurl(url : string){
    window.open(url);
  }

  getData(){
    this.fireStore.collection("bookmark").get().subscribe((values)=>{
      values.docs.forEach((doc)=>{
        let docemail = JSON.parse(JSON.stringify(doc.data()));
       if(docemail.uid == this.uid){
        this.value.push({
          'key' : doc.id,
          'value' : doc.data()
        });
        this.buttonVisible = true;
        this.notFoundVisible = false;
       }
      })
    })
  }

  deleteALL(){
    this.fireStore.collection('bookmark').ref.where('uid' , '==' , this.uid)
    .get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        doc.ref.delete();
      })
    }).then(()=>{
      this.value = [];
    }).then(()=>{
      this.router.navigateByUrl('/home');
    })
  }
}
