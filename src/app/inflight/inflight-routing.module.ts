import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InflightComponentComponent } from './inflight-component/inflight-component.component';
import { AncillaryPassengerComponent } from './ancillary-passenger/ancillary-passenger.component';





const routes: Routes = [
  {
    path : '',
          component: InflightComponentComponent,
           children: [
              { path:'addancillary',component:AncillaryPassengerComponent },
            
        ]
      
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InflightRoutingModule { }
