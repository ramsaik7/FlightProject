import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PassengerDetailsComponent } from './passenger-details.component';
import { FormsModule, FormBuilder, FormControl, ReactiveFormsModule, NgForm } from '../../../../node_modules/@angular/forms';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '../../../../node_modules/@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { FlightDataService } from '../../shared/flightData.service';
import { of } from '../../../../node_modules/rxjs';
import { AddPassengerComponent } from '../add-passenger/add-passenger.component';
import { Component } from '../../../../node_modules/@angular/core';
import { EditPasssengerComponent } from '../edit-passsenger/edit-passsenger.component';
import { ToastrService, ToastrModule } from '../../../../node_modules/ngx-toastr';
describe('PassengerDetailsComponent', () => {
  let component: PassengerDetailsComponent;
  let fixture: ComponentFixture<PassengerDetailsComponent>;
  let adminService:FlightDataService;
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerDetailsComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientTestingModule,MaterialModule,MatDialogModule,BrowserAnimationsModule,ToastrModule.forRoot()],
      providers:[FormBuilder,FormControl,{
        provide: MAT_DIALOG_DATA, useValue:{}
      },{
        provide: MatDialogRef,
        useValue: dialogMock
      },
      {
        provide: ToastrService, 
        useClass: ToastrService
      },
    
    ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (admin) => {
    fixture = TestBed.createComponent(PassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    adminService=admin;
  }));




  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on check',()=>{

    let data=[{
      flights:[ ]
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(adminService,'getFlightById').and.returnValue(of(data));
    component.onCheck(event);
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
  // it('should add new',()=>{
  //   component.addNew();
   
  // })


  // it('should Edit Passenger',()=>{
  // let action:string;
  // let obj:any;

  // spyOn(component.dialogRef2, 'afterClosed').and.callThrough();
  // component.openDialogEdit(action,obj);

    
  // })


  it('should ngOnit',()=>{

    let data=[{
      flights:[ ]
    }];
    spyOn(adminService,'getflights').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.flights).toBe(data);
    expect(component.flights.length).toEqual(1);
  })

});
