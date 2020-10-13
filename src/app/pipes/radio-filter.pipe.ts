import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radioFilter',
  pure: false
})
export class RadioFilterPipe implements PipeTransform {

  transform(items: any[], radios: any): any[] {
    if (!items) {
      return [];
    }

    if (
      !radios
      ) {
      return items
    }

    return items.filter(ship => {
      return ship.type.includes(radios);
    });
  }
  }
