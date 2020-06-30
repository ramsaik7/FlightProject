import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';


@NgModule({
  declarations: [SeatLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
 
  exports:[SeatLayoutComponent]
})
export class SharedModule { }
