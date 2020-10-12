import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { ShipsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {

  constructor(private readonly shipListService: ShipsGQL) { }

  currentPage = 1
  searchText = ""
  portList = {
    'Port Canaveral': false,
    'Port of Los Angeles': false,
    'Fort Lauderdale': false

  }

  shipList$ = this.shipListService
    .fetch()
    .pipe(
      map(res => res.data.ships)
    )

  ngOnInit() {
    console.log(this.portList['Port Canaveral'])
  }

  // clickEvent(event) {
  //   if (event.target.checked === true) {

  //     this.searchPort.push(event.target.id)

  //     return this.searchPort


  //   } else if (event.target.checked === false) {

  //     this.searchPort = this.searchPort.filter(port => port !== event.target.id)

  //     return this.searchPort
  //   }

  // }

}
