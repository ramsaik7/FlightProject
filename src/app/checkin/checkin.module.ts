import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinRoutingModule } from './checkin-routing.module';
import { DisplayFlightComponent } from './display-flight/display-flight.component';
// import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { CheckInComponentComponent } from './check-in-component/check-in-component.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavService } from '../shared/services/sidenav.service';
import { FilterflightsPipe } from './filterflights.pipe';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SeatChangeComponent } from './seat-change/seat-change.component';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '../../../node_modules/@angular/material/paginator';
import { CheckinSeatComponent } from './checkin-seat/checkin-seat.component';
import { SeatLayoutComponent } from '../shared/seat-layout/seat-layout.component';



@NgModule({
  declarations: [DisplayFlightComponent, CheckInComponentComponent, SidebarComponent, FilterflightsPipe, FilterDataComponent, SeatChangeComponent, CheckinSeatComponent],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
   // ToastrModule.forRoot(),


  ]
})
export class CheckinModule { }
