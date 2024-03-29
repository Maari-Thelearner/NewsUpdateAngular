import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { BookmarkComponent } from './Components/bookmark/bookmark.component';
import { CategoryComponent } from './Components/home/category/category.component';
import { CountryComponent } from './Components/home/country/country.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';

import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PhoneauthComponent } from './Components/Authentication/phoneauth/phoneauth.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToConsole = () => redirectLoggedInTo(['home']);

const routes: Routes = [

  {path : 'home' , component : HomeComponent},
  {path : '' , component : HomeComponent },
  {path : 'bookmark' , component :BookmarkComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectUnauthorizedToLogin,}},


  {path : 'login' , component : LoginComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectLoggedInToConsole }},
  {path : 'register' , component : RegisterComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectLoggedInToConsole }},
  {path : 'phone-auth' , component : PhoneauthComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectLoggedInToConsole }},
  {path: 'profile' , component : ProfileComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectUnauthorizedToLogin,}},
  {path: 'countries' , component : CountryComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectUnauthorizedToLogin,}},

  {path : 'category' , component : CategoryComponent, canActivate : [AngularFireAuthGuard] , data: { authGuardPipe: redirectUnauthorizedToLogin,}},
  {path : '**', redirectTo : '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
