import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { FiltersService } from '../services/filters.service';
import { ShipsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.scss']
})
export class ShipListComponent implements OnInit {
  constructor(private readonly shipListService: ShipsGQL, private filters: FiltersService) { }

  currentPage = 1

  get searchText(): string {
    return this.filters.searchText
  }

  get portList(): object {
    return this.filters.portList
  }

  get type(): string {
    return this.filters.type
  }

  shipList$ = this.shipListService
    .fetch()
    .pipe(
      map(res => res.data.ships)
    )

  ngOnInit() {

  }

}
