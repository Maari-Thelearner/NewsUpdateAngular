import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { RootcomponentComponent } from '../../rootcomponent/rootcomponent.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: FirebaseserviceService,public router : Router,private _snackBar: MatSnackBar , private users : RootcomponentComponent) { }

  ngOnInit(): void {
    this.auth.errormessage=null;
  }
//For account creation in Appgarage
async SignUp(email:string,password:string,confirmPassword:string) {

  //For Password condition validation
  let regularexperssion = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$');

  if(email == ''){
    this.auth.errormessage = "Email should not be NULL"
  }
  else if(password == confirmPassword){
    if( (password!= '') &&  (regularexperssion.test(password))){
      await this.auth.signUp(email,password).then(()=>{
        this.users.user = 'Signout'
      });
    }
    else if(password == ''){
      this.auth.errormessage = "Password should not be NULL"
    }
    else{
      console.log(password);
      this.auth.errormessage = "•Password must contain Minimum of 8 and Maximum of32 characters"+
      "•Password must contain at least one Uppercase,Lowercase,Special Character and one Numeric value";
    }
  }
  else{
    this.auth.errormessage = "Both the passwords should be match."
  }
  if(this.auth.errormessage != null){
    this._snackBar.open(this.auth.errormessage, 'Close',{
      panelClass : ['blue-snackbar']
    });
  }
}
}
