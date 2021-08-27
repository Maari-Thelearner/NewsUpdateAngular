import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { BookmarkComponent } from './Components/bookmark/bookmark.component';
import { CovidupdateComponent } from './Components/covidupdate/covidupdate.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarkComponent,
    CovidupdateComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
