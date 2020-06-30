import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightDataService } from '../../shared/flightData.service';
import { MatOptionSelectionChange } from '../../../../node_modules/@angular/material/core';
import { MatCheckboxChange } from '../../../../node_modules/@angular/material/checkbox';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';
import { MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { EditServicesComponent } from '../edit-services/edit-services.component';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
@Component({
  selector: 'app-ancillary-services',
  templateUrl: './ancillary-services.component.html',
  styleUrls: ['./ancillary-services.component.css']
})
export class AncillaryServicesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private adminService: FlightDataService,
    private dialog: MatDialog) { }

  myFlight: any;
  flightNameList: any = [];
  distinctFlights: any = [];
  flightName: any;
  someValue: any;
  plane: any = [];
  singleflight: any = [];
  flightIdpipe: any;
  resutedFlight: any;

  changeAncillary: false;
  changeShopping: false;
  changeSpecialMeal: false;
  dialogData: any;
  displayedColumns = ['AncillaryServices', 'editServices'];
  ELEMENT_DATA: Element[] = [];
  dataSource: any;
  openService=false;
  ngOnInit(): void {


    this.adminService.getflights().subscribe(data => {
      this.myFlight = data;
      console.log(this.myFlight);

      this.getUniqueFlight();
    });
    //this.dataSource.paginator = this.paginator;
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

  onChange(event: MatOptionSelectionChange) {
    this.flightName = this.distinctFlights[event.source.value];
    this.adminService.getFlightByName(this.flightName).subscribe(data => {
      this.plane = data;     
    });




  }

  onCheck($event: any) {
    let res = $event.checked;
    if (res) {
      this.flightIdpipe = $event.source.value;
      //console.log(this.flightIdpipe);
      this.adminService.getFlightById(this.flightIdpipe).subscribe(data => {
        this.singleflight = data;
        //console.log(this.singleflight);

        this.resutedFlight = this.singleflight[0];
        //console.log(this.resutedFlight);
        //console.log(this.resutedFlight.ancillaryServices);
        this.ELEMENT_DATA = this.resutedFlight.ancillaryServices;

        //console.log(this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.openService=true;
        //console.log(this.dataSource);
        //this.dataSource=['aa','bb','cc','dd','ee'];
      });
    }
    
  }

  addAncillary() {

    //console.log(this.resutedFlight);
    this.resutedFlight.ancillaryServices = this.resutedFlight.ancillaryServices.split(',');
    this.adminService.updateAncillary(this.resutedFlight.id, this.resutedFlight).subscribe(data => {
      //console.log(data)
      //console.log("Update Ancillary Successfully");
    });
    this.changeAncillary = false;

  }

  addSpecialMeal() {
    console.log(this.resutedFlight);
    this.resutedFlight.specialMeal = this.resutedFlight.specialMeal.split(',');
    this.adminService.updateSpecialMeal(this.resutedFlight.id, this.resutedFlight).subscribe(data => {
      //console.log(data)
      //console.log("Update Special Meal Successfully");
    });
    this.changeSpecialMeal = false;

  }

  addShoppingItem() {
    //console.log(this.resutedFlight);
    this.resutedFlight.shoppingItem = this.resutedFlight.shoppingItem.split(',');
    this.adminService.updateShoppingItem(this.resutedFlight.id, this.resutedFlight).subscribe(data => {
      //console.log(data)
      //console.log("Update Shopping Item Successfully");
    });
    this.changeShopping = false;

  }

}

