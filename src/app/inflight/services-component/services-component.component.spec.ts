import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponentComponent } from './services-component.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { FlightDataService } from '../../shared/flightData.service';

describe('ServicesComponentComponent', () => {
  let component: ServicesComponentComponent;
  let fixture: ComponentFixture<ServicesComponentComponent>;
  let inflightService:FlightDataService;
  let data:any;
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ServicesComponentComponent ],
      
      providers:[{
        provide: MAT_DIALOG_DATA, useValue:{}
      },{
        provide: MatDialogRef,
        useValue: dialogMock
      }]
      //providers:[{provide:MAT_DIALOG_DATA,useValue:{}},{provide:MatDialogRef,useValue:{}}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponentComponent);
    component = fixture.componentInstance;

    inflightService = fixture.debugElement.injector.get(FlightDataService);
    data= [
      {
        "flightName": "Indigo",
        "flightId": "6E-2130",
        "id": 1,
        
        "ancillaryServices": [
          "Ancillary1",
          "Ancillary2",
          "Ancillary3",
          "Ancillary4"
        ],
        "shoppingItem": [
          "Shopping Item1",
          "Shopping Item2"
        ],
        "specialMeal": [
          "NormalMeal",
          "SpecialMeal"
        ],
        "departureTime": "11:48:22 GMT+0530 (India Standard Time)",
        "departureFrom": "Bengaluru",
        "arrivalTo": "Chennai",
        "arrival": "08:48:22 GMT+0530 (India Standard Time)",
        "duration": "02 hrs",
        "price": 3000,
        "image": "https://pbs.twimg.com/profile_images/1044172604511215616/uUJ06nkr_400x400.jpg",
        "passengers": [
          {
            "customerName": "Akash Sai",
            "customerId": 1,
            "seatNumber": "9E",
            "checkIn": true,
            "wheelchair": false,
            "category": "meals",
            "infant": false,
            "passport": "AkB1212",
            "address": "Jharsguda",
            "DOB": null,
            "ancillaryRequested": true,
            "ancillayService": [
              "Ancillary1",
              "Ancillary4"
            ],
            "specialMeal": "NormalMeal",
            "shoppingItem": [
              "Shopping Item1",
              "Shopping Item3"
            ]
          },
          {
            "customerName": "Yash Rathod",
            "customerId": 2,
            "seatNumber": "1B",
            "checkIn": true,
            "wheelchair": false,
            "category": "meals",
            "infant": false,
            "passport": "",
            "address": "Banglore",
            "DOB": null,
            "ancillaryRequested": true,
            "ancillayService": [
              "Ancillary1",
              "Ancillary4"
            ],
            "specialMeal": "SpecialMeal",
            "shoppingItem": []
          },
          {
            "customerName": "kesav Rai",
            "customerId": 3,
            "seatNumber": "2B",
            "checkIn": true,
            "wheelchair": false,
            "category": "meals",
            "infant": false,
            "passport": "AkB1212",
            "address": "Ranchi",
            "DOB": "",
            "ancillaryRequested": true,
            "ancillayService": [
              "Ancillary1",
              "Ancillary4"
            ],
            "specialMeal": "NormalMeal",
            "shoppingItem": []
          },
          {
            "customerName": "Sameer",
            "seatNumber": "9D",
            "checkIn": false,
            "address": "Bhubaneshwar",
            "DOB": "2020/06/23",
            "passport": "",
            "category": "infant"
          }
        ]
      }]
     let spy=spyOn(inflightService,'getAncillaryFlight').and.returnValue((data));
    


    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dialog should be closed after doAction()', () => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.doAction();
     expect(spy).toHaveBeenCalled(); 
  });
  
  it('dialog should be closed after closedDialog()', () => {
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeDialog();
     expect(spy).toHaveBeenCalled();    
  });

});
