import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing',
  standalone: true
})
export class TitleCasingPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let words = value.split(' ');
    for(let i = 0; i < words.length; i++){
      if(i> 0 && this.isPreposition(words[i])){
        words[i] = words[i].toLowerCase();
      }
      else
      {
        words[i] = words[i].substring(0 ,1 ).toUpperCase() + words[i].substring(1).toLowerCase();
      }      
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean{
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }

}


