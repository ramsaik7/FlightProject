import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';

import { FilterPassengerComponent } from './filter-passenger.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { FilterdataPipe } from '../filterdata.pipe';
import { FlightDataService } from '../../shared/flightData.service'
import { of } from '../../../../node_modules/rxjs';


describe('FilterPassengerComponent', () => {
  let component: FilterPassengerComponent;
  let fixture: ComponentFixture<FilterPassengerComponent>;
  let adminService:FlightDataService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPassengerComponent,FilterdataPipe],
      imports:[HttpClientTestingModule],
    })
    .compileComponents();
  }));


  beforeEach(inject([FlightDataService], (admin) => {
    fixture = TestBed.createComponent(FilterPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    adminService=admin;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should load ngOnit',()=>{
    let data=[{
      myFlight:[]
    }];
    spyOn(adminService,'getflights').and.returnValue(of(data));
    component.ngOnInit();

    expect(component.myFlight).toBe(data);
    expect(component.myFlight.length).toEqual(1);
  })

  it('should on check',()=>{

    let data=[{
    }];

    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(adminService,'getFlightById').and.returnValue(of(data));
    component.onCheck(event);
    expect(component.plane.length).toEqual(0);
  })

  it('should on change',()=>{

    let data=[{
      flights:[ ]
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(adminService,'getFlightByName').and.returnValue(of(data));
    component.onChange(event);


  })

  it('should onchange passport',()=>{

    let event:any={
      source:{value:"someVal"},
      checked:true
    };

    component.onClickPassport(event);
    expect(component.onClickPassport(event)).toBeTruthy();
    
  })


  it('should onchange Address',()=>{

    let event:any={
      source:{value:"someVal"},
      checked:true
    };

    component.onClickAddress(event);
    expect(component.onClickAddress(event)).toBeTruthy();
  })

  it('should onchange DOB',()=>{

    let event:any={
      source:{value:"someVal"},
      checked:true
    };

    component.onClickDOB(event);
    expect(component.onClickDOB(event)).toBeTruthy();
  })


});
