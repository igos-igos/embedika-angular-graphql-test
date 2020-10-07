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

  shipList$ = this.shipListService
    .fetch()
    .pipe(
      map(res => res.data.ships)
    )

  ngOnInit() {
  }

}
