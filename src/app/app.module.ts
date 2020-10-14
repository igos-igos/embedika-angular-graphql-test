import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';

import { FilterPipe } from './pipes/filter.pipe'
import { CheckboxFilterPipe } from './pipes/checkbox-filter.pipe';
import { RadioFilterPipe } from './pipes/radio-filter.pipe';
import { TextFilterComponent } from './ship-list/text-filter/text-filter.component';
import { CheckboxFilterComponent } from './ship-list/checkbox-filter/checkbox-filter.component';
import { RadioFilterComponent } from './ship-list/radio-filter/radio-filter.component';
import { AddCommaPipe } from './pipes/add-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShipListComponent,
    ShipDetailsComponent,
    FilterPipe,
    CheckboxFilterPipe,
    RadioFilterPipe,
    TextFilterComponent,
    CheckboxFilterComponent,
    RadioFilterComponent,
    AddCommaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
