import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addComma'
})
export class AddCommaPipe implements PipeTransform {

  transform(items: any[]): any {
    if (!items) {
      return [];
    }

    let missionArr = []

    items.forEach(item => {
      missionArr.push(item.name)
    })

    missionArr = missionArr.join(', ').split(' ')

    return missionArr
  }
}
