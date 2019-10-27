import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitAnswer'
})
export class SplitAnswerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let MyArray = value.split(',');
    console.log(MyArray);
    return MyArray;
  }

}
