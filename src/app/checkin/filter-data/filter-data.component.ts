import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';

import { MatOptionSelectionChange } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { ToastrService } from 'ngx-toastr';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';
import { SeatChangeComponent } from '../seat-change/seat-change.component';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { FlightDataService } from '../../shared/flightData.service';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';



@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  flights: any = [];

  flightNameList: any = [];

  distinctFlights: any = [];

  flightIdpipe: any;

  passengers: any;

  flightName: any;

  flightId: any;

  singleflight: any = [];

  resultedPassenger: any;

  someValue: any;

  resultsLength = 0;
  pagesize = 10;

  dialogData: any;

  result: any;

  selectedSeatChange: any;



  displayedColumns = ['customerName', 'AncillaryServices', 'seatNumber', 'changeSeat'];
  ELEMENT_DATA: Element[] = [];
  dataSource: any;

  constructor(private checkInService: FlightDataService,
    private toastrService:ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.checkInService.getflights().subscribe(data => {
      this.flights = data;
      console.log(this.flights);
      this.getUniqueFlight();
    })
    // this.dataSource.paginator = this.paginator;
  }


  getUniqueFlight() {
    for (let i = 0; i < this.flights.length; i++)
      this.flightNameList.push(this.flights[i].flightName);

    const distinct = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    this.distinctFlights = this.flightNameList.filter(distinct);
    //console.log(this.distinctFlights);

  }


  onChange(event: MatOptionSelectionChange) {
    //console.log(event.source.value);
    this.flightName = this.distinctFlights[event.source.value];
    //console.log(this.flightName);
    this.checkInService.getFlightByName(this.flightName).subscribe(data => {
      this.flightId = data;
      // this.flightIdCheck.push(this.flightId[event.source.value]);
      //console.log(this.flightId);


    });
  }

  onClickWheelChair($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    if (res) {
      this.someValue = "wheelchair";
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

  }

  onClickInfant($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    if (res) {
      this.someValue = "infant";
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

  }

  onClickCheckIn($event: MatCheckboxChange) {
    let res = $event.checked;
    //console.log(res);
    if (res) {
      this.someValue = "checkIn";
    }
    else if (!res) {
      this.someValue = "";
    }
    return res;

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
        this.checkInService.saveFlight(this.singleflight[0]);
        //console.log(this.resultedPassenger);
        this.ELEMENT_DATA = this.resultedPassenger;
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        // this.dataSource.paginator=this.paginator;
        

      });
    } else {
      this.resultedPassenger = null;

    }

    //console.log(this.resultedPassenger);
    return this.singleflight;
  }


  openDialog(action: string, obj: any) {
    console.log(obj);
    this.dialogData = obj;
    this.selectedSeatChange = this.dialogData.seatNumber;
    const dialogRef = this.dialog.open(SeatChangeComponent, {
      maxWidth: "50%",
      data: this.dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      // console.log('after change');
      // console.log(this.result);
      // console.log('before change');
      // console.log(this.dialogData);
      // console.log(this.selectedSeatChange);
      // console.log(this.resultedPassenger);
      // console.log(this.resultedPassenger[0].customerName)
      // console.log(this.dialogData.customerName);
      // for (let i = 0; i < this.resultedPassenger.length; i++) {

      //    if (this.resultedPassenger[i].customerName != this.dialogData.customerName && this.resultedPassenger[i].seatNumber === this.dialogData.seatNumber) {
      //     console.log(this.resultedPassenger[i]);
      //     this.resultedPassenger[i].seatNumber = this.selectedSeatChange;
      //    }
      // }
     // this.dialogData.seatNumber=
      this.singleflight.passengers = this.resultedPassenger;

      console.log(this.singleflight);
      console.log(this.singleflight[0].id);
      this.checkInService.updatePassengerSeat(this.singleflight[0].id, this.singleflight[0]).subscribe(data => {
        console.log(data);
        console.log("updated succesfully");
        this.toastrService.info('updated seat successfully');
        
      },
    
      error=>{
        console.log(error);
        this.toastrService.warning("Opps error in updating...")
      }

        )

    });
  }



}

export interface Element {
  passengerName: string;
  ancillaryService: string;
  seatNumber: string;
}
