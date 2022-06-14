import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 0) {
      return value;
    }
    const stringChars: string[] = value.split('');
    stringChars.reverse();
    return stringChars.join('');
  }
}
