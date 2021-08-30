import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercountry'
})
export class FiltercountryPipe implements PipeTransform {

  transform(value: any, searchCountry : string): any {
    if(searchCountry === ""){
      return value;
    }
    const searchedCountryArray : any = [];
    for(let i=0;i<value.length;i++){
      let searchedCountryName : string = value[i].name;
      if(searchedCountryName.toLowerCase().startsWith(searchCountry.toLowerCase())){
        searchedCountryArray.push(value[i])
      }
    }
    return searchedCountryArray;
  }

}
