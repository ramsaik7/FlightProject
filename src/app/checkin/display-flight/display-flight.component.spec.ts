import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { of } from '../../../../node_modules/rxjs';
import { DisplayFlightComponent } from './display-flight.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { Router } from '../../../../node_modules/@angular/router';
// import { CheckInService } from '../check-in.service';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';
import { FlightDataService } from '../../shared/flightData.service';

describe('DisplayFlightComponent', () => {
  let component: DisplayFlightComponent;
  let fixture: ComponentFixture<DisplayFlightComponent>;
   let checkInService:FlightDataService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFlightComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (checkIn) => {
    fixture = TestBed.createComponent(DisplayFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // length=0;
    checkInService=checkIn;
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should on check',()=>{

  //   let data=[{
  //     flights:[ ]
  //   }];
  //   let event:any={
  //     source:{value:"someVal"},
  //     checked:true
  //   };
  //   spyOn(checkInService,'getFlightById').and.returnValue(of(data));
  //   component.onCheck(event);
  // })

  it('should on change',()=>{

    let seatLayout={
      booked:[]
    }
    let data=[{
      flights:[{
        
        passengers:[
          
        ]
      }],
      
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(checkInService,'getFlightByName').and.returnValue(of(data));
    let Element=component.resultedPassenger;
    let datasource=new MatTableDataSource<any>(Element);
    component.seatsLayout=seatLayout;
    fixture.detectChanges();
    component.onChange(event);


  })

  it('should call get Selected',()=>{
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    component.getSelected(event);
  })

  it('should call get trail',()=>{
    let event:any={
      source:{value:"someVal"},
      checked:true
    };

   component.getTrial(event);
  })


  it('should call get Passenger',()=>{
    let value:any;
    component.getPassenger(value);
  })

  it('should call ngOnit',()=>{
    let data=[{
      flights:[]
    }];
    spyOn(checkInService,'getflights').and.returnValue(of(data));
    component.ngOnInit();

  })

});
