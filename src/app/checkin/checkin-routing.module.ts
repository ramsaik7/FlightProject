import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SeatLayoutComponent } from './seat-layout/seat-layout.component';

import { CheckInComponentComponent } from './check-in-component/check-in-component.component';
import { DisplayFlightComponent } from './display-flight/display-flight.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { CheckinSeatComponent } from './checkin-seat/checkin-seat.component';


const routes: Routes = [
  {
    path: '',
    component: CheckInComponentComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      // { path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
      //{ path: 'charts', component:ChartsComponent },
      {
        path: 'displayflight', component: DisplayFlightComponent
      },
      {
        path: 'filterdata', component: FilterDataComponent
      },
      {
        path: 'displayflight/getpassenger', component: CheckinSeatComponent
      }

    ]

  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinRoutingModule { }
