import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { of } from '../../../../node_modules/rxjs';
import { CheckinSeatComponent } from './checkin-seat.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { FlightDataService } from '../../shared/flightData.service';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { MatTooltip, MatTooltipModule } from '../../../../node_modules/@angular/material/tooltip';

describe('CheckinSeatComponent', () => {
  let component: CheckinSeatComponent;
  let fixture: ComponentFixture<CheckinSeatComponent>;
  let checkInService:FlightDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinSeatComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,MatTooltipModule],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (checkIn) => {
    fixture = TestBed.createComponent(CheckinSeatComponent);
    let checkInFlight:any;
    component.checkFlight=checkInFlight;
    component = fixture.componentInstance;
    fixture.detectChanges();
    checkInService=checkIn;
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should expect trial',()=>{
  //   let event=['1A','2A'];
  //   event[0]='1A'
  //   let checkInFlight={rowPassenger:{}};
  //   let rowPassenger={seatNumber:"1A",
  //                     checkedIn:true};
  //   let seatNumber=rowPassenger.seatNumber;
  //   checkInFlight.rowPassenger=rowPassenger;
  //   spyOn(checkInService,'getflights').and.returnValue(of(checkInFlight));
  //   component.getTrial(event);
  // })

  // it('should expect selected',()=>{
  //   let event=['1A','2A'];
  //   event[0]='1A'
  //   let rowPassenger={seatNumber:"1A",
  //                     checkedIn:true};

  //   component.getSelected(event);
  // })
});
