import { Component, OnInit } from '@angular/core';
import { fadeInItems } from '@angular/material/menu';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatOptionSelectionChange } from '@angular/material/core';
import { FlightDataService } from '../../shared/flightData.service';

//import { FilterdataPipe } from '../filterdata.pipe';


@Component({
  selector: 'app-filter-passenger',
  templateUrl: './filter-passenger.component.html',
  styleUrls: ['./filter-passenger.component.css']
})
export class FilterPassengerComponent implements OnInit {
  myFlight: any;
  flightNameList: any = [];
  distinctFlights: any = [];
  flightName: any;
  someValue: any;
  plane: any = [];
  singleflight: any = [];
  flightIdpipe: any;
  resultedPassenger: any = [];

  constructor(private adminService: FlightDataService) { }
  data: any;
  result: boolean;
  passengerDetails: any[] = [];
  ngOnInit(): void {

    this.adminService.getflights().subscribe(data => {
      this.myFlight = data;
      //console.log(this.myFlight);

      this.getUniqueFlight();
    });

  }


  getUniqueFlight() {
    for (let i = 0; i < this.myFlight.length; i++)
      this.flightNameList.push(this.myFlight[i].flightName);

    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    this.distinctFlights = this.flightNameList.filter(distinct);
    //console.log(this.distinctFlights);

  }



  onClickPassport($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    if (res) {
      this.someValue = "passport";
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

  }

  onClickAddress($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    if (res) {
      this.someValue = "address";
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

  }

  onClickDOB($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    //console.log("dob1")
    if (res) {
      this.someValue = "DOB";
      //console.log("dob2")
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

  }

  onChange(event: MatOptionSelectionChange) {
    console.log(event.source.value);
    this.flightName = this.distinctFlights[event.source.value];
    console.log(this.flightName);
    this.adminService.getFlightByName(this.flightName).subscribe(data => {
      this.plane = data;
      // this.flightIdCheck.push(this.flightId[event.source.value]);
      console.log(this.plane);


    });


  }

  onCheck($event: MatCheckboxChange) {
    let res = $event.checked;
    if (res) {
      this.flightIdpipe = $event.source.value;
      console.log(this.flightIdpipe);
      this.adminService.getFlightById(this.flightIdpipe).subscribe(data => {
        this.singleflight = data;
        console.log(this.singleflight);
        this.resultedPassenger = this.singleflight[0].passengers;
        console.log(this.resultedPassenger);
      });
    }

    console.log(this.resultedPassenger);
    return this.resultedPassenger;
  }




}
