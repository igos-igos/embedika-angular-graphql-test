import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkboxFilter',
  pure: false
})
export class CheckboxFilterPipe implements PipeTransform {

  transform(items: any[], checkboxes: any): any[] {
    if (!items) {
      return [];
    }

    if (!checkboxes['Port Canaveral'] && !checkboxes['Port of Los Angeles'] && !checkboxes['Fort Lauderdale']) {
      return items
    }


    return items.filter(ship =>
      (checkboxes['Port Canaveral'] && ship.home_port == "Port Canaveral")
      ||
      (checkboxes['Port of Los Angeles'] && ship.home_port == "Port of Los Angeles")
      ||
      (checkboxes['Fort Lauderdale'] && ship.home_port == "Fort Lauderdale")
    )
  }

}
