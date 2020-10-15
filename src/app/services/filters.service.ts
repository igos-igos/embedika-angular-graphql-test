import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {

  searchText = ""

  portList: object = {
    'Port Canaveral': false,
    'Port of Los Angeles': false,
    'Fort Lauderdale': false
  }

  checkboxCount = 0

  type = ""

  constructor() { }
}
