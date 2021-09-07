import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';
import { RootcomponentComponent } from '../../rootcomponent/rootcomponent.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseAuth:FirebaseserviceService,private router : Router,private _snackBar: MatSnackBar , private users : RootcomponentComponent) { }

  ngOnInit(): void {
    this.firebaseAuth.errormessage = null;
  }
  async SignIn(email: string,password: string){
    if(email == ''){
      this.firebaseAuth.errormessage = "Email should not be NULL"
    }
    await this.firebaseAuth.signIn(email,password).then(()=>{
      this.users.user = 'Signout'
    })
    if(this.firebaseAuth.errormessage != null){
      this._snackBar.open(this.firebaseAuth.errormessage, 'Close',{
        panelClass : ['blue-snackbar']
      });
    }
  }
  async SignInWithGoogle(){
    await this.firebaseAuth.loginwithGoogle().then(()=>{
      this.users.user = 'Signout'
    })
  }

}
