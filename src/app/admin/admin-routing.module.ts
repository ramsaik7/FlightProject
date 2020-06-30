import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { EditServicesComponent } from './edit-services/edit-services.component';
import { FilterPassengerComponent } from './filter-passenger/filter-passenger.component';
// import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AncillaryServicesComponent } from './ancillary-services/ancillary-services.component';

const routes: Routes = [

    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'displaydetails', component: PassengerDetailsComponent },
            { path: 'editpassenger', component: AddPassengerComponent },
            { path: 'ancillaryservices', component: AncillaryServicesComponent },
            { path: 'filterpassenger', component: FilterPassengerComponent },
            
        ]
    },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class AdminRoutingModule { }
