import { Component, OnInit, Inject, Optional } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passenger } from '../../shared/_models/passenger';
import { FlightDataService } from '../../shared/flightData.service';


@Component({
  selector: 'app-seat-change',
  templateUrl: './seat-change.component.html',
  styleUrls: ['./seat-change.component.css']
})
export class SeatChangeComponent implements OnInit {


  local_data: any;
  passenger: Passenger;
  action: string;
  bookedPassengers:any;
  seatFlight:any;
  bookedSeat:any=[];
  seats:any=["1A", "1B", "1C", "1D", "1E", "1F","2A", "2B", "2C", "2D", "2E", "2F",
  "3A", "3B", "3C", "3D", "3E", "3F",
  "4A", "4B", "4C", "4D", "4E", "4F",
  "5A", "5B", "5C", "5D", "5E", "5F",
  "6A", "6B", "6C", "6D", "6E", "6F",
  "7A", "7B", "7C", "7D", "7E", "7F",
  "8A", "8B", "8C", "8D", "8E", "8F",
  "9A", "9B", "9C", "9D", "9E", "9F"];
 
  constructor( private checkinService:FlightDataService,

    public dialogRef: MatDialogRef<SeatChangeComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Passenger) {
    //console.log(data);
    this.passenger = data;
    //console.log(this.passenger);
  }

  ngOnInit(): void {

    this.seatFlight=this.checkinService.getSavedFlight();
    console.log(this.seatFlight);

    this.bookedPassengers=this.seatFlight.passengers;  
    console.log(this.bookedPassengers);
    for(var i=0;i<this.bookedPassengers.length;i++){
    this.bookedSeat.push(this.bookedPassengers[i].seatNumber);
  }
  console.log(this.bookedSeat);

  this.seats = this.seats.filter(val => !this.bookedSeat.includes(val));
  console.log(this.seats);
    
  }


  doAction() {
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
