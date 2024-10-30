import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit: number, ...args: unknown[]): any {
    if(!value)
    {
      return null;
    }    


    let actualLimit = (limit) ? limit : 50;
    return value.substring(0, actualLimit) + '...';
  }

}
