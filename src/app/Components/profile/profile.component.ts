import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
// userDp : any = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';
userDp : any = "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg";
userName : any = 'loading';
  constructor(private firebaseAuth : AngularFireAuth , private firebaseService : FirebaseserviceService) { }

  ngOnInit() {
    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        if(user.photoURL == null){
          this.userDp = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
          this.userName = "SampleUser";
        }else{
          this.userDp = user.photoURL;
          this.userName = user.displayName;
        }
      } else {
        this.userDp = "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";
        this.userName = "Login/Register for full access"
      }
    });
  }

}
