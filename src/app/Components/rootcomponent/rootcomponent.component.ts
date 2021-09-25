import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseserviceService } from 'src/app/Services/firebaseservice.service';
@Component({
  selector: 'app-rootcomponent',
  templateUrl: './rootcomponent.component.html',
  styleUrls: ['./rootcomponent.component.css']
})
export class RootcomponentComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  userDp : string = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';
  constructor(private observer: BreakpointObserver , public logoutService : FirebaseserviceService , public dialog : MatDialog , private firebaseAuth : AngularFireAuth) { }

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
}
