import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercountrycode'
})
export class FiltercountrycodePipe implements PipeTransform {

  transform(value: any, selectedCountryCode : string): any {
    if(selectedCountryCode === ""){
      return value;
    }
    const searchedCountryArray : any = [];
    for(let i=0;i<value.length;i++){
      let searchedCountryName : string = value[i].name;
      if(searchedCountryName.toLowerCase().startsWith(selectedCountryCode.toLowerCase())){
        searchedCountryArray.push(value[i])
      }
    }
    return searchedCountryArray;
  }
  }

