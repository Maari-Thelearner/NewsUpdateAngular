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
import { MaterialmoduleModule } from './Modules/materialmodule/materialmodule.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryComponent } from './Components/home/country/country.component';
import { FiltercountryPipe } from './Components/home/country/filtercountry.pipe';
import { CategoryComponent } from './Components/home/category/category.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarkComponent,
    CovidupdateComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SettingsComponent,
    CountryComponent,
    FiltercountryPipe,
    CategoryComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
