import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { BookmarkComponent } from './Components/bookmark/bookmark.component';
import { CovidupdateComponent } from './Components/covidupdate/covidupdate.component';
import { CategoryComponent } from './Components/home/category/category.component';
import { CountryComponent } from './Components/home/country/country.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SettingsComponent } from './Components/settings/settings.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'home' , component : HomeComponent},
  {path : 'bookmark' , component :BookmarkComponent},
  {path : 'covid-19' , component : CovidupdateComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path: 'profile' , component : ProfileComponent},
  {path: 'countries' , component : CountryComponent},
  {path : 'settings' , component : SettingsComponent},
  {path : 'category' , component : CategoryComponent},
  {path : '**', redirectTo : '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
