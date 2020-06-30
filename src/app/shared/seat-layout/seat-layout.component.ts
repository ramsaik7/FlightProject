import { Component, OnInit, Input, Output } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { EventEmitter } from '@angular/core';
import { FlightDataService } from '../../shared/flightData.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css']
})
export class SeatLayoutComponent implements OnInit {

  //public text: string = 'hello';
  public text: string = "Display Seat";
  isToggled = false;
  onlySeat: any[] = [];
  rows = new Array();
  wheelchair = false;
  selectedSeat: any;
  even = 10;
  wheel = false;
  database: any = [];
  database1: any = [];

  @Input() seatsLayout: any;

  @Output() confirm = new EventEmitter();

  @Output() trial = new EventEmitter();

  @Input() type: string;

  @Input() checkInSeat: string;

  constructor(private checkInService: FlightDataService,
              private toastrService: ToastrService,
              private router:Router) { }



  ngOnInit() {

    // console.log(this.flightService.sendFlight());
    // this.service.get()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.database = data;
    //   })

    // this.database=this.flightService.sendFlight();

    // console.log(this.database);
    //  this.database= [
    //   {
    //     "customerName": "Yash",
    //     "seatNumber": "4A",
    //     "checkIn": false,
    //     "wheelchair": false,
    //     "category": "meals",
    //     "infant": false,
    //     "ancillayService": [
    //       "food",
    //       "specialfood"
    //     ]
    //   },
    //   {
    //     "customerName": "Kesav",
    //     "seatNumber": "7A",
    //     "checkIn": false,
    //     "wheelchair": false,
    //     "category": "wheelchair",
    //     "infant": false,
    //     "ancillayService": [
    //       "food",
    //       "specialfood"
    //     ]
    //   }
    // ]



    var rows = new Array()
    var seatsInARow = new Array()
    var seatChar;
    if (this.seatsLayout != undefined && this.seatsLayout.hasOwnProperty('totalRows')) {
      if (this.seatsLayout.seatNaming = 'rowType') {
        for (let row = 0; row < this.seatsLayout.totalRows; row++) {
          for (let seats = 0; seats < this.seatsLayout.seatsPerRow; seats++) {
            seatChar = String.fromCharCode(65 + seats)
            seatsInARow.push((row + 1).toString() + seatChar);
          }
          rows.push(seatsInARow);
          seatsInARow = new Array();
        }
      }
    }
    this.rows = rows



  }

category: Tile[] = [
    {text:'Checkin + Wheel Chair', cols:1, rows:1, color:'blue'},
    {text:'Checkin + Infant', cols:1, rows:1, color:'pink'},
    {text:'checkin + Meals',cols:1,rows:1,color:'orange'},
    {text:'Checkin', cols:1, rows:1, color:'#bada55'},
    {text:'Not Checkin', cols:1, rows:1, color:'#F42536'},

  ];

  seatCheckIn:Tile[]=[
     {text:'Checkin', cols:1, rows:1, color:'#bada55'},
     {text:'Not Checkin', cols:1, rows:1, color:'#F42536'},
  ];


  MealPreference:Tile[]=[
    {text:'Special Meal', cols:1, rows:1, color:'orange'},
    {text:'Normal Meal', cols:1, rows:1, color:'green'},
 ];

  


  done() {
    this.confirm.emit(this.seatsLayout.booked);
    this.trial.emit(this.onlySeat);
    this.onlySeat = [];
    this.toastrService.success('checked in successfully');
    this.router.navigate(['checkin/displayflight'])

  }



  seatAction(seat) {
    console.log(seat);

    this.selectedSeat = seat;
    if (this.seatsLayout.booked.indexOf(seat) >= 0) {

      this.seatsLayout.booked = this.seatsLayout.booked.filter(bookedSeat => {
        return bookedSeat != seat;
      })
    }
    else {
      this.seatsLayout.booked.push(seat);
      this.onlySeat.push(seat);

    }
  }

  // f1(){
  //   this.text='Display Seat';
  //     console.log("f1")
  // }
  // f2(){
  //   this.text='Checkin Seat';
  //     console.log("f2")
  // }


  getResultedSeat() {

    this.checkInService.flightSelected;
    console.log(this.checkInService.flightSelected)

    console.log("called")
    this.database = this.checkInService.flightSelected;
    return true;
  }


  getColor(seat) {
    let myStyles;
    this.database.find((a) => {
      if (a.seatNo === seat) {
        if (a.category === "wheel") {
          myStyles = { backgroundColor: 'red' };
        }
        else if (a.category === "infant") {
          myStyles = { backgroundColor: 'green' };
        }
        else if (a.category === "meals") {
          myStyles = { backgroundColor: 'yellow' };
        }


      }
    })
    return myStyles;
  }

  isWheel(data: String): any {
    let response;
    this.database.find((a) => {
      if (a.seatNumber === data && a.category === "wheelchair") {
        response = true;
      }
    })

    return response;

  }
  isInfant(data) {
    let response;
    this.database.find((a) => {
      if (a.seatNumber === data && a.category === "infant") {
        response = true
      }
    })
    return response;
  }


  isMeals(data) {
    let response;

    this.database.find((a) => {
      if (a.seatNumber === data && a.category === "meals") {
        response = true;
      }
    })

    return response;
  }


  isSpecialMeal(data){
    let response;

    this.database.find((a) => {
      if (a.seatNumber === data && a.specialMeal === "SpecialMeal") {
        response = true;
      }
    })

    return response;
  }


  isNormalMeal(data){
    let response;

    this.database.find((a) => {
      if (a.seatNumber === data && a.specialMeal === "NormalMeal") {
        response = true;
      }
    })

    return response;
  }

  getMealsColor(seat) {
    let myStyles;
    this.database.find((a) => {
      if (a.seatNo === seat) {
        if (a.specialMeal === "SpecialMeal") {
          myStyles = { backgroundColor: 'orange' };
        }
        else if (a.category === "NormalMeal") {
          myStyles = { backgroundColor: 'green' };
        }

      }
    })
    return myStyles;
  }


  



}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}