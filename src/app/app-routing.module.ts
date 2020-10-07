import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { ShipListComponent } from './ship-list/ship-list.component';


const routes: Routes = [
  {
    path: '',
    component: ShipListComponent
  },
  {
    path: ':id',
    component: ShipDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
