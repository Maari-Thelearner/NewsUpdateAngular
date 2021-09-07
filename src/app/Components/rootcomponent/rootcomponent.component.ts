import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';

import { ProfileComponent } from '../profile/profile.component';
import { LogoutdialogComponent } from '../home/logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-rootcomponent',
  templateUrl: './rootcomponent.component.html',
  styleUrls: ['./rootcomponent.component.css']
})
export class RootcomponentComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  user : string = '';

  userDp : string = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';
  constructor(private observer: BreakpointObserver , public logoutService : FirebaseserviceService , public dialog : MatDialog , private firebaseAuth : AngularFireAuth) { }

  ngOnInit() {

    console.log('hello');
    if(this.logoutService.authState != null){
      this.user = 'Signout'
    }else{
      this.user = 'Login/Register'
    }
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  logout(){
this.dialog.open(LogoutdialogComponent);
}

}
