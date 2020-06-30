import { Component, OnInit,Inject, Optional } from '@angular/core';
import { routerTransition } from '../router.animation';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FlightDataService } from '../../shared/flightData.service';
import { Passenger } from '../../shared/_models/passenger';
import { ToastrService } from 'ngx-toastr';
import { MatOptionSelectionChange } from '../../../../node_modules/@angular/material/core';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css'],
  animations: [routerTransition()]
})
export class AddPassengerComponent implements OnInit {
  passenger: FormGroup;
  flights:any;
  myFlight:any;
  savedpassenger:Passenger;
  passengers:any=[];
  savedpassengers:any=[];
  categories:any=["wheelchair","infant","meals"];
  bookedPassengers:any;
  selectFlight:any=[];
  getFlightSeat:any=[];
  flightSeats:any;
  bookedSeat:any=[];
  seats:any=["1A", "1B", "1C", "1D", "1E", "1F","2A", "2B", "2C", "2D", "2E", "2F",
  "3A", "3B", "3C", "3D", "3E", "3F",
  "4A", "4B", "4C", "4D", "4E", "4F",
  "5A", "5B", "5C", "5D", "5E", "5F",
  "6A", "6B", "6C", "6D", "6E", "6F",
  "7A", "7B", "7C", "7D", "7E", "7F",
  "8A", "8B", "8C", "8D", "8E", "8F",
  "9A", "9B", "9C", "9D", "9E", "9F"];
  startDate = new Date(1990, 0, 1);
  constructor(public dialogRef: MatDialogRef<AddPassengerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Passenger,
    public adminService: FlightDataService,
    private toasterService:ToastrService,
  
    ) { 
      
      
    }


    ngOnInit(){
      this.adminService.getflights().subscribe(data1=>{
        this.flights=data1;
        for(let i=0;i<this.flights.length;i++){
            console.log(this.flights[i].flightId);
            this.selectFlight.push(this.flights[i].flightId);
        }
        console.log(this.flights);
        console.log(this.data);
        
      });

      this.adminService.getFlightById((this.data.flightId)).subscribe(data=>{
           this.getFlightSeat=data;
         })
     
    }
formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :'';
}


onNoClick(): void {

  this.dialogRef.close();
}
// book(){
// this.adminService.getFlightById((this.data.flightId)).subscribe(data=>{
//   this.getFlightSeat=data;
// })
// this.passengers=this.getFlightSeat[0].passengers;
// console.log(this.passengers);
// for(let i=0;i<this.passengers.length;i++){
//   this.bookedSeat.push(this.passengers[i].seatNumber);
// }
// console.log(this.bookedSeat);
// return this.bookedSeat;
// }

onChange(event:MatOptionSelectionChange){
  console.log(event.source.value);
 this.adminService.getFlightById(event.source.value).subscribe(data=>{
    this.flightSeats=data; 
    console.log(data);
    this.bookedPassengers=this.flightSeats[0].passengers;  
    console.log(this.bookedPassengers);
  for(var i=0;i<this.bookedPassengers.length;i++){
    this.bookedSeat.push(this.bookedPassengers[i].seatNumber);
  }
  console.log(this.bookedSeat);

  this.seats = this.seats.filter(val => !this.bookedSeat.includes(val));
  console.log(this.seats);
 })
}

 convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("/");
}
public confirmAdd(): any {
  
  console.log(this.data);
  this.adminService.getFlightById((this.data.flightId)).subscribe(data2=>{
    this.myFlight=data2;
    console.log(this.myFlight);
    this.passengers=this.myFlight[0].passengers;
    console.log(this.passengers);
    console.log(this.data.customerName);
 
    this.savedpassenger=new Passenger();
    this.savedpassenger.customerName=this.data.customerName;
    this.savedpassenger.seatNumber=this.data.seatNumber;
    this.savedpassenger.checkIn=false;
    this.savedpassenger.address="";
    console.log(this.data);
    
    this.savedpassenger.DOB=this.data.DOB;
    let date=this.convert(this.savedpassenger.DOB);
    this.savedpassenger.DOB=date;
    this.savedpassenger.passport=this.data.passport;
    this.savedpassenger.category=this.data.category;
    this.savedpassenger.address=this.data.address;

    if(!this.data.DOB){
      this.savedpassenger.DOB="";
    }
    if(!this.data.passport){
      this.savedpassenger.passport="";
    }
    if(!this.data.address){
      this.savedpassenger.address="";
    }
    console.log(this.savedpassenger);
    this.savedpassengers=this.passengers.push(this.savedpassenger);
    console.log(this.savedpassengers);
    this.myFlight.passengers=this.savedpassengers;
    console.log(this.myFlight[0]);
    console.log(this.myFlight[0].id);
    this.adminService.addPassenger(this.myFlight[0].id,this.myFlight[0]).subscribe(data=>{
     this.toasterService.success('Added Passenger Successfully');
     console.log(data);
    },
    error=>{
        this.toasterService.error('Opps!! Adding Passenger Unsuccessful');
        console.log(error);
    }
  );
  })
  
 return true;
}
}

