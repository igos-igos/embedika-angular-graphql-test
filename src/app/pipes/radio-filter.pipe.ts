import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radioFilter'
})
export class RadioFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
