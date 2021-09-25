import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {
  authState: any = null;
  errormessage : any = null;
  constructor(private firebaseAuth : AngularFireAuth , private route : Router , private fireStore : AngularFirestore) {
    this.firebaseAuth.authState.subscribe((auth=>{
      this.authState = auth;
    }))
   }

   //Service for Firebase Authentication.. Email and Password
  async signUp(email : string , password : string){

    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.route.navigate(['/home'])
    })
    .catch(error => {
     this.errormessage = error['message']
   })
  }
  async signIn(email: string , password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.route.navigate(['/home'])
    }).catch(error=>{
      this.errormessage = error['message']
    })
  }
//Service for Firebase Authentication.. GoogleSigin..
  async loginwithGoogle(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res=>{
      this.route.navigate(['/home'])
    }).catch(error=> {
      this.errormessage = error['message']
    });
  }

  async loginwithfacebook(){
    await this.firebaseAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>{
      this.route.navigate(['/home'])
    }).catch(error=> {
      this.errormessage = error['message']
    });
  }
//Service for Overall Logout of Authentication by Firebase
 async logout(){
  await  this.firebaseAuth.signOut().then(()=>{
      this.route.navigateByUrl('/home')
    })
  }

}
