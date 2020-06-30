
import { Component, OnInit, IterableDiffers, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FlightDataService } from '../../shared/flightData.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-checkin-seat',
  templateUrl: './checkin-seat.component.html',
  styleUrls: ['./checkin-seat.component.css']
})
export class CheckinSeatComponent implements OnInit {

  rowPassenger: any;
  checkFlight: any;

  constructor(private checkInService: FlightDataService,private router:Router) { }
  @Output() seats = new EventEmitter();

  ngOnInit(): void {

    this.rowPassenger = this.checkInService.getRowPassenger();
    this.checkFlight = this.checkInService.getFlightForCheckIn();

    //console.log(this.rowPassenger);

    //console.log(this.seatsLayout.checked);

    this.loadSeat();
  }
  seatsLayout: any = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: [],
    checked: ['1A'],

  }
  loadSeat() {
    let z = 0;
    for (let i = 0; i < this.checkFlight[z].passengers.length; i++) {
      {
        if (this.checkFlight[z].passengers[i].checkIn === true) {
          this.seatsLayout.checked.push(this.checkFlight[z].passengers[i].seatNumber);
        }
      }
    }
  }
  checkInSeat = "checkInSeat";
  getTrial(event) {
    //console.log(this.rowPassenger.seatNumber);
    //console.log(event[0]);
    if (event[0] === this.rowPassenger.seatNumber) {
      //console.log("checkedIn");
      // this.checkInService.updateCheckinStatus();
      this.rowPassenger.checkIn = true;

      //console.log(this.rowPassenger);
      for (let i = 0; i < this.checkFlight[0].passengers.length; i++) {
        if (this.checkFlight[0].passengers[i].seatNumber === this.rowPassenger.seatNumber) {
          this.checkFlight[0].passengers[i] = this.rowPassenger;

        }
      }
      //console.log(this.checkFlight[0].passengers);

      //console.log(this.checkFlight[0]);

      this.checkInService.updateCheckinStatus(this.checkFlight[0].id, this.checkFlight[0]).subscribe(data => {
        //console.log(data);

        //console.log("checkedIN successfully")
      })

      //console.log("checked");
    }

  }

  getSelected(event) {
    //console.log(this.rowPassenger.seatNumber);
    //console.log(event[0]);
    if (event[0] === this.rowPassenger.seatNumber) {
      //console.log("not checkedIn");
      // this.checkInService.updateCheckinStatus();
      this.rowPassenger.checkIn = false;

      //console.log(this.rowPassenger);
      for (let i = 0; i < this.checkFlight[0].passengers.length; i++) {
        if (this.checkFlight[0].passengers[i].seatNumber === this.rowPassenger.seatNumber) {
          this.checkFlight[0].passengers[i] = this.rowPassenger;
        }
      }
      //console.log(this.checkFlight[0].passengers);

      //console.log(this.checkFlight[0]);

      this.checkInService.updateCheckinStatus(this.checkFlight[0].id, this.checkFlight[0]).subscribe(data => {
        //console.log(data);

        //console.log("unchecked successfully")
      })

      //console.log("unchecked");
    }
  }

  backToCheckIn(){
    this.router.navigate(['checkin/displayflight']);
  }


}
