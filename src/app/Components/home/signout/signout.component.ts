import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  user : any = 'loading';
  constructor(private dialog : MatDialog , private firebaseAuth : AngularFireAuth) { }

  ngOnInit(){
    this.firebaseAuth.onAuthStateChanged((userState)=>{
      if(userState){
        this.user = 'Signout'
      }else{
        this.user = 'Login/Register'
      }
    })
  }


  logout(){
    this.dialog.open(LogoutdialogComponent);
    }
}
