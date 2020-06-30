import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { MatPaginator } from '../../../../node_modules/@angular/material/paginator';
import { Passenger } from '../../shared/_models/passenger';

import { MatCheckboxChange } from '../../../../node_modules/@angular/material/checkbox';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';
import { MatOptionSelectionChange } from '../../../../node_modules/@angular/material/core';
import { MatDialog } from'@angular/material/dialog';
import { ServicesComponentComponent } from '../services-component/services-component.component';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';
import { FlightDataService } from '../../shared/flightData.service';
@Component({
  selector: 'app-ancillary-passenger',
  templateUrl: './ancillary-passenger.component.html',
  styleUrls: ['./ancillary-passenger.component.css']
})
export class AncillaryPassengerComponent implements OnInit {
  
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  displayedColumns = ['customerName', 'ancillarySerivces', 'address','passport','seat','edit'];
  constructor(
              private dialog:MatDialog,
              private toastrService:ToastrService,
              private inflightService:FlightDataService
            ) { }


  // @Output() flightPopUp = new EventEmitter();
  flightPopUp:any;
  ELEMENT_DATA: Element[] = [];
  dataSource:any;
  flightResponse:any[]=[];
  search:string;
  sortResult:any[]=[];
  searchText:string;
  data:any;
  resultAction:any;
  passengers:any;
  flights:any;
  passengerDetails:any[]=[];
  flightName:any;
  myflight:any;
  flightNameList:any=[];
  distinctFlights:any=[];
  singleflight:any;
  flightIdpipe:any;
  resultedPassenger:any=[];
  dialogData:any;
  selectedSeatChange:any;
  result:any;
  passenger: Passenger;
  ancillaryRequestedPassenger:any=[];
  resultedAction:any;

  ngOnInit(): void {

    this.inflightService.getflights().subscribe(data=>{

      this.flights=data;
      // console.log(this.flights);
      this.getUniqueFlight();

    })
   // this.dataSource.paginator = this.paginator;
  }

  
  getUniqueFlight(){
    for(let i=0;i<this.flights.length;i++)
      this.flightNameList.push(this.flights[i].flightName);

      const distinct=(value,index,self)=>{
        return self.indexOf(value)===index;
      }
      this.distinctFlights=this.flightNameList.filter(distinct);
      // console.log(this.distinctFlights);

  }

  
  onChange(event:MatOptionSelectionChange) {
    // console.log(event.source.value);
    this.flightName=this.distinctFlights[event.source.value];
    // console.log(this.flightName);
    this.inflightService.getFlightByName(this.flightName).subscribe(data=>{
      this.myflight=data;
      // this.flightIdCheck.push(this.flightId[event.source.value]);
      // console.log(this.myflight);
    });
   
   
  }

  onCheck($event:MatCheckboxChange){
    let res= $event.checked;
    if(res){
          this.flightIdpipe=$event.source.value;
          // console.log(this.flightIdpipe);
          this.inflightService.getFlightById(this.flightIdpipe).subscribe(data=>{
            this.singleflight=data;
            // console.log(this.singleflight);
            this.resultedPassenger=this.singleflight[0].passengers;
            // console.log(this.resultedPassenger);
            this.inflightService.flightSelected = this.resultedPassenger;//get values
            this.inflightService.setAncillaryFlight(this.singleflight[0]);
            this.ELEMENT_DATA = this.resultedPassenger;
            this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
           this.dataSource.paginator=this.paginator;
          });
    }
   
    // console.log(this.ancillaryRequestedPassenger);
    return this.resultedPassenger;
  }


 

  // getFlight():any{
  //   return this.inflightService.ancillaryFlight;
  // }

  // setFlight(value:any){
  //   this.inflightService.ancillaryFlight=value;
  // }
  // ancillaryRequests(){
  //   // console.log(this.resultedPassenger);
  //   for(let i=0;i<this.resultedPassenger.length;i++){
  //     if(this.resultedPassenger[i].ancillaryRequested){
  //       this.ancillaryRequestedPassenger.push(this.resultedPassenger[i]);
  //     }
  //   }
  //   this.ELEMENT_DATA = this.ancillaryRequestedPassenger;
  //   this.dataSource = new MatTableDataSource<Element>(this.ELEMENT_DATA);
  //   this.dataSource.paginator=this.paginator;
  // }




getPassengerAncillary(action:string,obj: any){
  // console.log(obj);     
  // console.log(action); 
  obj.action=action;
  this.dialogData=obj;  
  console.log(this.dialogData);
  this.resultedAction=action; 
  this.selectedSeatChange=this.dialogData.seatNumber;
  const dialogRef = this.dialog.open(ServicesComponentComponent, {
    maxWidth: "60%",
    data: this.dialogData,
  });

  dialogRef.afterClosed().subscribe(dialogResult => {
    this.result = dialogResult;
    // console.log('after change');
    // console.log(this.result);
    // console.log('before change');

    // console.log(this.dialogData.customerName);
 
   this.resultedPassenger=this.dialogData;
   console.log(this.dialogData);
   delete this.resultedPassenger.action;
   console.log(this.resultedPassenger);
   this.singleflight.passengers=this.resultedPassenger;
    
    //console.log(this.singleflight);

    //console.log(this.singleflight);
    //console.log(this.singleflight[0].id);

    this.inflightService.updateAncillaryPassenger(this.singleflight[0].id,this.singleflight[0]).subscribe(data=>{
      console.log(data);
      //console.log("updated Successfully");
      this.toastrService.info("updated successfully");
    },
  
      error=>{
        console.log(error);
        this.toastrService.error("Opps!! error in updating");
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

