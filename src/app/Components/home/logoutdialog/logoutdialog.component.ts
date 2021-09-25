import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutdialog',
  templateUrl: './logoutdialog.component.html',
  styleUrls: ['./logoutdialog.component.css']
})
export class LogoutdialogComponent implements OnInit {
  dialogContent : any = "loading..";
  dialogButton : any = "loading..";
  loggedin : any = false;
  constructor(private firebaseAuth : AngularFireAuth , private route : Router) { }

  ngOnInit(){
    this.firebaseAuth.onAuthStateChanged((userState)=>{
      if(userState){
        //current user
        this.loggedin = true;
        this.dialogContent = "Are you sure you want to logout ?";
        this.dialogButton = "Yes";

      }else{
        //no current user
        this.loggedin = false;
        this.dialogContent = "If you have already a account please login else go with registeration(Google signin available)";
        this.dialogButton = "Login";
      }
    })
  }
  logout(){
    this.firebaseAuth.signOut().then(()=>{
      this.route.navigate(["/home"]);
    })
  }

}
