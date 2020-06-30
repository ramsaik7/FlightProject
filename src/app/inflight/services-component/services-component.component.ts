import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passenger } from '../../shared/_models/passenger';
import { InflightRoutingModule } from '../inflight-routing.module';
import { FlightDataService } from '../../shared/flightData.service';
@Component({
  selector: 'app-services-component',
  templateUrl: './services-component.component.html',
  styleUrls: ['./services-component.component.css']
})
export class ServicesComponentComponent implements OnInit {

  local_data: any;
  passenger: Passenger;
  action: string;
  changeAncillary: false;
  changeShopping: false;
  changeSpecialMeal: false;
  ancillaryService:any[];
  shoppingItem:any[];
  resultedFlight:any;
  specialMeal:any;
  ngOnInit(): void {
      this.resultedFlight=this.inflightService.getAncillaryFlight();
      this.ancillaryService=this.resultedFlight.ancillaryServices;
      this.shoppingItem=this.resultedFlight.shoppingItem;
      this.specialMeal=this.resultedFlight.specialMeal;
      console.log(this.ancillaryService)

  }
  constructor(public dialogRef: MatDialogRef<ServicesComponentComponent>,
    //@Optional() is used to prevent error if no data is passed
    private inflightService:FlightDataService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Passenger) {

    console.log(data);
    this.passenger = data;
    console.log(this.passenger);
    this.local_data = { ...data };
    this.action = this.local_data.action;
    console.log(this.action);
  }
  doAction() {
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }



  editPassengerAncillary() {
    this.closeDialog();
  }

  editPassengerSpecialMeal() {
    this.closeDialog();
  }

  editPassengerShoppingItem() {
    this.closeDialog();
  }

 

}
