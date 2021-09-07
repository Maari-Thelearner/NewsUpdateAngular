import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;
  // user : string = '';
  // userDp : string = 'https://source.unsplash.com/c_GmwfHBDzk/200x200';
  // constructor(private observer: BreakpointObserver , public logoutService : FirebaseserviceService , public dialog : MatDialog , private firebaseAuth : AngularFireAuth) {

  // }
  constructor(){}


ngOnInit(){
// if(this.logoutService.authState != null){
//   this.user = 'Signout'
// }else{
//   this.user = 'Login/Register'
// }

}

  // ngAfterViewInit() {
  //   this.observer
  //     .observe(['(max-width: 800px)'])
  //     .pipe(delay(1))
  //     .subscribe((res) => {
  //       if (res.matches) {
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close();
  //       } else {
  //         this.sidenav.mode = 'side';
  //         this.sidenav.open();
  //       }
  //     });
  // }


  // logout(){
  //     this.dialog.open(SignoutdialogComponent);
  // }
}
