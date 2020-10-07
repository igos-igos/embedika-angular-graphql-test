import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { map, switchMap } from 'rxjs/operators'
import { ShipDetailsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly shipDetailsService: ShipDetailsGQL
  ) { }

  shipDetails$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id')
      return this.shipDetailsService.fetch({id});
    }),
    map(res => res.data.ship)
  )

  ngOnInit() {
  }

}
