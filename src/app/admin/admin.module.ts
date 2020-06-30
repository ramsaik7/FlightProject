import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { FilterdataPipe } from './filterdata.pipe';
import { AdminRoutingModule } from './admin-routing.module';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { EditServicesComponent } from './edit-services/edit-services.component';
import { FilterPassengerComponent } from './filter-passenger/filter-passenger.component';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '../../../node_modules/@angular/material/dialog';
import { EditPasssengerComponent } from './edit-passsenger/edit-passsenger.component';
import { AncillaryServicesComponent } from './ancillary-services/ancillary-services.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [AdminComponent, PassengerDetailsComponent, AddPassengerComponent,
    EditServicesComponent,
    FilterdataPipe,
    SidebarComponent,
    FilterPassengerComponent,
    EditPasssengerComponent,
    AncillaryServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  
    MaterialModule,
    SharedModule,
    MatDialogModule,
    AdminRoutingModule
  ],
  exports: [
    
  ],
})
export class AdminModule { }
