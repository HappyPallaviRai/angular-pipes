import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any): any {
    value.sort((a, b) => (a.name > b.name) ? 1 : -1);
    return value;
  }
}
