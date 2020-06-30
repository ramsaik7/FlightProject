import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InflightRoutingModule } from './inflight-routing.module';
import { AncillaryPassengerComponent } from './ancillary-passenger/ancillary-passenger.component';
import { InflightComponentComponent } from './inflight-component/inflight-component.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { MatPaginatorModule } from '../../../node_modules/@angular/material/paginator';
import { MatSlideToggleModule } from '../../../node_modules/@angular/material/slide-toggle';
import { MatCardActions, MatCardHeader } from '../../../node_modules/@angular/material/card';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { SharedModule } from '../shared/shared.module';
import { SeatLayoutComponent } from '../shared/seat-layout/seat-layout.component';
// import { ToastrModule } from '../../../node_modules/ngx-toastr';



@NgModule({
  declarations: [AncillaryPassengerComponent, InflightComponentComponent, ServicesComponentComponent],
  imports: [
    CommonModule,
    InflightRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSlideToggleModule,
    SharedModule,
    //ToastrModule.forRoot(),
  ]
})
export class InflightModule { }
