import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AncillaryServicesComponent } from './ancillary-services.component';


import { HttpClientTestingModule } from'@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '../../../../node_modules/@angular/material/dialog';
import { of } from '../../../../node_modules/rxjs';
import { FlightDataService } from '../../shared/flightData.service';
import { MatCheckboxChange } from '../../../../node_modules/@angular/material/checkbox';


describe('AncillaryServicesComponent', () => {
  let component: AncillaryServicesComponent;
  let fixture: ComponentFixture<AncillaryServicesComponent>;
  let adminService:FlightDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncillaryServicesComponent ],
      imports:[HttpClientTestingModule],
      providers:[{
        provide: MatDialog, useValue:{}
        
      },{
        provide: MatDialogRef,
        useValue: {}
      }],
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (admin) => {
    fixture = TestBed.createComponent(AncillaryServicesComponent);
    component = fixture.componentInstance;
    // ancillaryService="";
    fixture.detectChanges();
    adminService=admin;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add ancillary',()=>{
    let data=[{
      ancillaryServices:['aa','bb']
    }]
    component.resutedFlight={ancillaryServices:'aa,bb'};
    spyOn(adminService,'updateAncillary').and.returnValue(of(data));
    component.addAncillary();
    expect(component.resutedFlight.ancillaryServices).toContain('aa');
  })

  it('should add Meal',()=>{
    let data=[{
      specailMeal:[ ]
    }]
    component.resutedFlight={specialMeal:'aa,bb'};
    spyOn(adminService,'updateSpecialMeal').and.returnValue(of(data));
    component.addSpecialMeal();
    expect(component.resutedFlight.specialMeal).toContain('aa');

  })

  // it('should on check',()=>{

  //   let data=[];
  //   let event:any={
  //     source:{value:"someVal"},
  //     checked:true
  //   };
  //   spyOn(adminService,'getFlightById').and.returnValue(of(data));
  //   component.onCheck(event);
  //   expect(component.plane).toEqual(data);
  // })


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
    expect(component.plane).toBe(data);
  
  })


  it('should add Shopping Item',()=>{
    let data=[{
      shoppingItem:[ ]
    }]
    component.resutedFlight={shoppingItem:'aa,bb'};
    spyOn(adminService,'updateShoppingItem').and.returnValue(of(data));
    component.addShoppingItem();
    expect(component.resutedFlight.shoppingItem).toContain('aa');
  })

  // it('should get unique flight',()=>{
  //   let myFlight=[];
  //   component.distinctFlights;
  //   component.getUniqueFlight();
  // })

  it('should load ngOnit',()=>{
    let data=[{
      myFlight:[]
    }];
    spyOn(adminService,'getflights').and.returnValue(of(data));
    component.ngOnInit();
    expect(component.myFlight).toBe(data);
  })
 
});
