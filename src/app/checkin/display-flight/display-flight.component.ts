import { Component, OnInit, IterableDiffers, Output, EventEmitter, ViewChild } from '@angular/core';

import { MatOptionSelectionChange } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { FlightDataService } from '../../shared/flightData.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';


@Component({
  selector: 'app-display-flight',
  templateUrl: './display-flight.component.html',
  styleUrls: ['./display-flight.component.css']
})
export class DisplayFlightComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private checkInService: FlightDataService, private router: Router, private activatedRoute: ActivatedRoute) { }


  @Output() seats = new EventEmitter();

  flights: any = [];
  resultedPassenger: any;
  aeroplane: any = [];

  passengerDetails: any;

  flightDetail: any = [];

  displayColoredSeat = "displayColoredSeat";

  flightName: any;

  flightId: any;

  flightIdpipe: any;

  passengers: any;

  flightNameList: any = [];

  distinctFlights: any = [];

  flightIdCheck: any = [];

  singleflight: any = [];

  displayedColumns = ['customerName', 'AncillaryServices', 'seatNumber', 'checkIN'];
  ELEMENT_DATA: Element[] = [];
  dataSource: any;


  ngOnInit() {

    this.checkInService.getflights().subscribe(data => {
      this.flights = data;
      console.log(this.flights);
      this.getUniqueFlight();
      // this.dataSource.paginator = this.paginator;

    })
  }
  getTrial(event) {
    console.log(event);
  }
  getPassenger(value) {
    //console.log(value);
    this.checkInService.getSelectedPassenger(value);
    this.checkInService.getFlightCheckIn(this.singleflight);
    this.router.navigate(['getpassenger'], { relativeTo: this.activatedRoute });
  }
  getUniqueFlight() {
    for (let i = 0; i < this.flights.length; i++)
      this.flightNameList.push(this.flights[i].flightName);

    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    this.distinctFlights = this.flightNameList.filter(distinct);
    console.log(this.distinctFlights);
  }
  seatsLayout: any = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: [],
    checked: [],
  }

  getSelected(event) {
    console.log(event)
    return true;
  }

  onChange(event: MatOptionSelectionChange) {
    console.log(event.source.value);
    this.flightName = this.distinctFlights[event.source.value];
    console.log(this.flightName);
    this.checkInService.getFlightByName(this.flightName).subscribe(data => {
      this.flightId = data;
      // this.flightIdCheck.push(this.flightId[event.source.value]);
      console.log(this.flightId);
    });


  }

  onCheck($event: MatCheckboxChange) {
    let res = $event.checked;

    if (res) {
      this.flightIdpipe = $event.source.value;
      //console.log(this.flightIdpipe);

      this.checkInService.getFlightById(this.flightIdpipe).subscribe(data => {
        this.singleflight = data;
        //console.log(this.singleflight);
        this.resultedPassenger = this.singleflight[0].passengers;

        //this.checkInService.getResultedFlight(this.resultedPassenger);
        // this.router.navigate(['/path'],data)
        for (let i = 0; i < this.resultedPassenger.length; i++) {
          //console.log(this.resultedPassenger[i].seatNumber);
          this.seatsLayout.booked.push(this.resultedPassenger[i].seatNumber);
          if (this.resultedPassenger[i].checkIn === true)
            this.seatsLayout.checked.push(this.resultedPassenger[i].seatNumber);
        }
        //console.log(this.seatsLayout.checked);
        this.checkInService.flightSelected = this.resultedPassenger;
        this.ELEMENT_DATA = this.resultedPassenger;
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        //this.seats.emit(this.resultedPassenger);

        //console.log(this.seatsLayout.checked);
      });


    } else {
      this.flightIdpipe = null;
      this.resultedPassenger = null;

    }
    console.log(this.resultedPassenger);

    return this.singleflight;
  }

}

export interface Element {
  passengerName: string;
  ancillaryService: string;
  seatNumber: string;
}
