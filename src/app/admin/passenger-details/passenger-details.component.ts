import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatOptionSelectionChange } from '@angular/material/core';
import { FlightDataService } from '../../shared/flightData.service';
import { MatCheckboxChange } from '../../../../node_modules/@angular/material/checkbox';
import { AddPassengerComponent } from '../add-passenger/add-passenger.component';
import { Passenger } from '../../shared/_models/passenger';
import { EditPasssengerComponent } from '../edit-passsenger/edit-passsenger.component';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // @ViewChild(MatPaginator, { static: true }) paginator2: MatPaginator;

  DeatilsForm: FormGroup;
  name = 'Angular 5';
  displayedColumns = ['customerName', 'AncillaryServices', 'seatNumber'];

  displayedColumns2 = ['customerName', 'passport', 'address', 'edit'];
  ELEMENT_DATA: Element[] = [];
  dataSource: any;
  constructor(private formBuilder: FormBuilder,
    private adminService: FlightDataService,
    private dialog: MatDialog,
    private toasterService:ToastrService,) { }
  flightResponse: any[] = [];
  search: string;
  sortResult: any[] = [];
  searchText: string;
  data: any;
  passengers: any;
  flights: any;
  passengerDetails: any[] = [];
  flightName: any;
  myflight: any;
  flightNameList: any = [];
  distinctFlights: any = [];
  singleflight: any;
  flightIdpipe: any;
  resultedPassenger: any = [];
  dialogData: any;
  selectedSeatChange: any;
  result: any;
  passenger: Passenger;
  dialogRef2: any;
  ngOnInit(): void {

    this.DeatilsForm = this.formBuilder.group({
      passengerName: ['', Validators.required]

    });


    this.adminService.getflights().subscribe(data => {

      this.flights = data;
      console.log(this.flights);
      this.getUniqueFlight();

    })
    //this.dataSource.paginator = this.paginator;
  }

  //flights:string[]=["Indigo","Air-Asia"];



  get f() { return this.DeatilsForm.controls; }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  onChange(event: MatOptionSelectionChange) {
    console.log(event.source.value);
    this.flightName = this.distinctFlights[event.source.value];
    console.log(this.flightName);
    this.adminService.getFlightByName(this.flightName).subscribe(data => {
      this.myflight = data;
      // this.flightIdCheck.push(this.flightId[event.source.value]);

      console.log(this.myflight);
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
        this.ELEMENT_DATA = this.resultedPassenger;
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        //  this.dataSource.paginator2=this.paginator2;
      });
    }

    console.log(this.resultedPassenger);
    return this.resultedPassenger;
  }

  addNew() {
    const dialogRef = this.dialog.open(AddPassengerComponent, {
      data: { passenger: Passenger }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        console.log("added!!");
      }
    });
  }




  openDialogEdit(action: string, obj: any) {
    console.log(obj);
    this.dialogData = obj;
    //this.selectedSeatChange=this.dialogData.seatNumber;

    this.dialogRef2 = this.dialog.open(EditPasssengerComponent, {
      maxWidth: "50%",
      data: this.dialogData
    });

    this.dialogRef2.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      console.log('before change');
      console.log(this.dialogData);
      console.log(this.selectedSeatChange);
      console.log(this.resultedPassenger);
      console.log(this.resultedPassenger[0].customerName)
      console.log(this.dialogData.customerName);
      for (let i = 0; i < this.resultedPassenger.length; i++) {

        if (this.resultedPassenger[i].customerName === this.dialogData.customerName && this.resultedPassenger[i].seatNumber === this.dialogData.seatNumber) {
          this.resultedPassenger[i].customerName = this.dialogData.customerName;
          this.resultedPassenger[i].passport = this.dialogData.passport;
          this.resultedPassenger[i].address = this.dialogData.address;

        }
      }

      this.singleflight.passengers = this.resultedPassenger;
      console.log(this.singleflight);
      console.log(this.singleflight[0].id);
      this.adminService.updatePassenger(this.singleflight[0].id, this.singleflight[0]).subscribe(data => {
        console.log(data);
        console.log("updated succesfully");
        this.toasterService.success('Updated Passenger Successfully');
      },
      error=>{
        console.log(error);
        this.toasterService.warning('Opps.. trouble in updating');
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




