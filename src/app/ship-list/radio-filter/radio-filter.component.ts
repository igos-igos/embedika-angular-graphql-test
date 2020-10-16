import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss']
})
export class RadioFilterComponent implements OnInit {

  constructor(public filters: FiltersService, public pagination: PaginationService) { }

  ngOnInit(): void {
  }

}
