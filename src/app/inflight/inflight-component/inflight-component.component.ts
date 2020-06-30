import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '../../../../node_modules/@angular/material/sidenav';

@Component({
  selector: 'app-inflight-component',
  templateUrl: './inflight-component.component.html',
  styleUrls: ['./inflight-component.component.css']
})
export class InflightComponentComponent implements OnInit {

  seatsLayout: any = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: [],
    checked: [],
  }
  displayMealSeat = "displayMealSeat";

 
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  toggle() {
    this.sidenav.toggle();
  }

  constructor() { }

  ngOnInit(): void {
  }

  getMeal(event) {
    console.log(event);
  }

  getSelected(event){
    console.log(event);
    return event;
  }

}
