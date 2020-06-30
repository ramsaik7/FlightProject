import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { AddPassengerComponent } from './add-passenger.component';
import { FlightDataService } from '../../shared/flightData.service';
import { MaterialModule } from '../../material/material.module';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { of } from '../../../../node_modules/rxjs';
import { ToastrService, ToastrModule } from '../../../../node_modules/ngx-toastr';
import { Passenger } from '../../shared/_models/passenger';
describe('AddPassengerComponent', () => {
 
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;
  let adminService:FlightDataService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports :[MaterialModule,HttpClientTestingModule,FormsModule,BrowserAnimationsModule,ToastrModule.forRoot()],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue:{}
      },{
        provide: MatDialogRef,
        useValue: {}
      },
      {provide: ToastrService, useClass: ToastrService}],

    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (admin) => {
    fixture = TestBed.createComponent(AddPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
    adminService=admin;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('flight name and id checking',()=>{

  //   let fixture=TestBed.createComponent(AddPassengerComponent);
  //   let app=fixture.debugElement.componentInstance;
  //   let adminService=fixture.debugElement.injector.get(AdminService);
  //   this.myFlightId=this.adminService.getFlightById((this.data.flightId)).subscribe(data=>{
  //     this.myFlight=data;
  //   });
  //  fixture.detectChanges();
  //   expect(this.myFlight.id).toEqual(app.myFlightId.id);
  // })

  it('should confirm Add',()=>{
    let data=[{
      passengers:[]
    }]
    let data1={}
    spyOn(adminService,'getFlightById').and.returnValue(of(data));
    spyOn(adminService,'addPassenger').and.returnValue(of(data1))
    component.confirmAdd();
    expect(component.confirmAdd()).toEqual(true);
  })

  
  it('should ngOnit',()=>{

    let data=[{
      flights:[ ]
    }];
    spyOn(adminService,'getflights').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.flights).toBe(data);
    expect(component.flights.length).toEqual(1);
  })


  it('should ngOnit',()=>{
    let bookedSeat=[];
    let data=[{
      flights:[ ]
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(adminService,'getFlightById').and.returnValue(of(data));
    component.bookedSeat=bookedSeat;
    component.onChange(event);
    
  })


});

