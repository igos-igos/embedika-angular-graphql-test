import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {
  constructor(public filters: FiltersService, public pagination: PaginationService) {
  }

  ngOnInit(): void {
  }

}
