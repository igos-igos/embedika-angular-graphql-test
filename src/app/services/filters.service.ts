import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  searchText: string = ""

  portList: object = {
    'Port Canaveral': false,
    'Port of Los Angeles': false,
    'Fort Lauderdale': false

  }

  type: string = ''

  constructor() { }
}
