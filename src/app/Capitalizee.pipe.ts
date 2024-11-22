import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalizee'
})
export class CapitalizeePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return '';
    }

    return value.toUpperCase();
  }

}
