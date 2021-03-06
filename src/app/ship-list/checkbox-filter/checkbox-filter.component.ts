import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  constructor(public filters: FiltersService, public pagination: PaginationService) { }

  ngOnInit(): void {
  }

  toggleCheckboxCount(event) {
    if (this.filters.checkboxCount === 0 && !event.target.checked) {
      return
    } else if (event.target.checked) {
      this.filters.checkboxCount += 1
    } else {
      this.filters.checkboxCount -= 1
    }
  }

  toggleFilters() {
    this.filters.isOpen = !this.filters.isOpen
  }
}
