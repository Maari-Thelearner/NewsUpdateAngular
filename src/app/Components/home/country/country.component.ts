import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsorgapiserviceService } from 'src/app/Services/newsorgapiservice.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  searchCountry : string = '';
countries = [
  {"name": "Argentina", "code": "ar" , "flag" : "https://www.worldometers.info/img/flags/ar-flag.gif"},
    {"name": "Austria","code":"at" , "flag" : "https://www.worldometers.info/img/flags/au-flag.gif"},
    {"name": "Belgium","code":"be", "flag" : "https://www.worldometers.info/img/flags/be-flag.gif"},
    {"name": "Brazil","code":"br", "flag" : "https://www.worldometers.info/img/flags/br-flag.gif"},
    {"name": "Bulgaria","code":"bg", "flag" : "https://www.worldometers.info/img/flags/bu-flag.gif"},
    {"name": "Canada","code":"ca", "flag" : "https://www.worldometers.info/img/flags/ca-flag.gif"},
    {"name": "China","code":"cn", "flag" : "https://www.worldometers.info/img/flags/ch-flag.gif"},
    {"name": "Colombia","code":"co", "flag" : "https://www.worldometers.info/img/flags/co-flag.gif"},
    {"name": "Cuba","code":"cu", "flag" : "https://www.worldometers.info/img/flags/cu-flag.gif"},
    {"name": "Czech Republic","code":"cz", "flag" : "https://www.worldometers.info/img/flags/ez-flag.gif"},
    {"name": "Egypt","code":"eg", "flag" : "https://www.worldometers.info/img/flags/eg-flag.gif"},
    {"name": "France","code":"fr", "flag" : "https://www.worldometers.info/img/flags/fr-flag.gif"},
    {"name": "Germany","code":"de", "flag" : "https://www.worldometers.info/img/flags/gm-flag.gif"},
    {"name": "Greece","code":"gr", "flag" : "https://www.worldometers.info/img/flags/gr-flag.gif"},
    {"name": "Hong Kong","code":"hk", "flag" : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png"},
    {"name": "Hungary","code":"hu", "flag" : "https://www.worldometers.info/img/flags/hu-flag.gif"},
    {"name": "India","code":"in", "flag" : "https://www.worldometers.info/img/flags/in-flag.gif"},
    {"name": "Indonesia","code":"id", "flag" : "https://www.worldometers.info/img/flags/id-flag.gif"},
    {"name": "Ireland", "code":"ie", "flag" : "https://www.worldometers.info/img/flags/ei-flag.gif"},
    {"name":"Israel","code":"il", "flag" : "https://www.worldometers.info/img/flags/is-flag.gif"},
    {"name":"Italy","code":"it", "flag" : "https://www.worldometers.info/img/flags/it-flag.gif"},
    {"name":"Japan","code":"jp", "flag" : "https://www.worldometers.info/img/flags/ja-flag.gif"},
    {"name":"Latvia","code":"lv", "flag" : "https://www.worldometers.info/img/flags/lg-flag.gif"},
    {"name":"Lithuania","code":"lt", "flag" : "https://www.worldometers.info/img/flags/lh-flag.gif"},
    {"name":"Malaysia","code":"my", "flag" : "https://www.worldometers.info/img/flags/my-flag.gif"},
    {"name":"Mexico","code":"mx", "flag" : "https://www.worldometers.info/img/flags/mx-flag.gif"},
    {"name":"Morocco","code":"ma", "flag" : "https://www.worldometers.info/img/flags/mo-flag.gif"},
    {"name":"Netherlands","code":"nl", "flag" : "https://www.worldometers.info/img/flags/nl-flag.gif"},
    {"name":"New Zealand","code":"nz", "flag" : "https://www.worldometers.info/img/flags/nz-flag.gif"},
    {"name":"Nigeria","code":"ng", "flag" : "https://www.worldometers.info/img/flags/ni-flag.gif"},
    {"name":"Norway","code":"no", "flag" : "https://www.worldometers.info/img/flags/no-flag.gif"},
    {"name":"Philippines","code":"ph", "flag" : "https://www.worldometers.info/img/flags/rp-flag.gif"},
    {"name":"Poland","code":"pl", "flag" : "https://www.worldometers.info/img/flags/pl-flag.gif"},
    {"name":"Portugal","code":"pt", "flag" : "https://www.worldometers.info/img/flags/po-flag.gif"},
    {"name":"Romania","code":"ro", "flag" : "https://www.worldometers.info/img/flags/ro-flag.gif"},
    {"name":"Russia","code":"ru", "flag" : "https://www.worldometers.info/img/flags/rs-flag.gif"},
    {"name":"Saudi Arabia","code":"sa", "flag" : "https://www.worldometers.info/img/flags/sa-flag.gif"},
    {"name":"Serbia","code":"rs", "flag" : "https://www.worldometers.info/img/flags/ri-flag.gif"},
    {"name":"Singapore","code":"sg", "flag" : "https://www.worldometers.info/img/flags/sn-flag.gif"},
    {"name":"Slovakia","code":"sk", "flag" : "https://www.worldometers.info/img/flags/lo-flag.gif"},
    {"name":"South Africa","code":"za", "flag" : "https://www.worldometers.info/img/flags/sf-flag.gif"},
    {"name":"South Korea","code":"kr", "flag" : "https://www.worldometers.info/img/flags/ks-flag.gif"},
    {"name":"Sweden","code":"se", "flag" : "https://www.worldometers.info/img/flags/sw-flag.gif"},
    {"name":"Switzerland","code":"ch", "flag" : "https://www.worldometers.info/img/flags/sz-flag.gif"},
    {"name":"Taiwan","code":"tw", "flag" : "http://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg"},
    {"name":"Thailand","code":"th", "flag" : "https://www.worldometers.info/img/flags/th-flag.gif"},
    {"name":"Turkey","code":"tr", "flag" : "https://www.worldometers.info/img/flags/tu-flag.gif"},
    {"name":"UAE","code":"ae", "flag" : "https://www.worldometers.info/img/flags/ae-flag.gif"},
    {"name":"Ukraine","code":"ua", "flag" : "https://www.worldometers.info/img/flags/up-flag.gif"},
    {"name":"United Kingdom","code":"gb", "flag" : "https://www.worldometers.info/img/flags/uk-flag.gif"},
    {"name":"United States","code":"us", "flag" : "https://www.worldometers.info/img/flags/us-flag.gif"},
    {"name":"Venuzuela","code":"ve" , "flag" : "https://www.worldometers.info/img/flags/ve-flag.gif"}
]
  constructor(private router : Router , private newsapiService : NewsorgapiserviceService) { }

  ngOnInit(){

  }

  SelectedCountry(code : string , name : string){
    this.newsapiService.Countrycode = code;
    this.newsapiService.Countryname = name;
    this.router.navigateByUrl("/home")
  }

}
