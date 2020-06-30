import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { SeatLayoutComponent } from './seat-layout.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { FlightDataService } from '../../shared/flightData.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

describe('SeatLayoutComponent', () => {
  let component: SeatLayoutComponent;
  let fixture: ComponentFixture<SeatLayoutComponent>;
  let checkInService:FlightDataService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ToastrService],
      declarations: [ SeatLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (checkIn)=> {
    fixture = TestBed.createComponent(SeatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('should done', () => {
//     let onlySeat=[];
//     let seatLayout={booked:[]};
//     component.confirm.emit(seatLayout.booked);
//     component.trial.emit(onlySeat);
//     component.done();
//   });

//   it('should get Resulted Seat',()=>{
//     component.getResultedSeat();
//   })

//   it('should get color Seat',()=>{
//     let seat:any;
//     component.database=seat;
//     component.getColor(seat);
//     expect(component.database.length).toEqual(0);
//   })

//   it('should find wheel',()=>{
//     let data:string;
//     let a={seatNumber:"6A",
//            category:"wheel"}
//     component.database.seatNumber=a.seatNumber;
//     component.database.category=a.category;
//     component.isWheel(data);
//     expect(component.database.length).toEqual(0);
//   })

//   it('should find infant',()=>{
//     let data:string;
//     let a={seatNumber:"6A",
//            category:"infant"}

//     component.database.seatNumber=a.seatNumber;
//     component.database.category=a.category;
//     component.isInfant(data);
//     expect(component.database.length).toEqual(0);
//   })

//   it('should find mea;',()=>{
//     let data:string;
//     let a={seatNumber:"6A",
//            category:"meals"}
//     component.database.seatNumber=a.seatNumber;
//     component.database.category=a.category;
//     component.isMeals(data);
//   })




//   it('select seat Action',()=>{

//       let seat:any;
//       let seatLayout={booked:[]};
//       component.seatsLayout=seatLayout;
//       component.seatAction(seat);

//   });

//   it('should select ngOninit',()=>{
//     let seatLayout={booked:[],
//                     seatNaming:String,
//                     totalRows:Number,
//                     seatsPerRow:Number,
//                     seatsInArow:[]};
//     let rows=new Array();

    
  
//     component.seatsLayout=seatLayout;
//     component.rows=rows;
//     component.seatsLayout.seatsInArow=seatLayout.seatsInArow;
//     component.seatsLayout.totalRows=seatLayout.totalRows;
//     component.seatsLayout.seatsPerRow=seatLayout.seatsPerRow;

//     component.ngOnInit();
//   })

});
