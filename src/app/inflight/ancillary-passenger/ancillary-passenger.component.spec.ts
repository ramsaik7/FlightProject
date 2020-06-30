import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of } from '../../../../node_modules/rxjs';
import { AncillaryPassengerComponent } from './ancillary-passenger.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '../../../../node_modules/@angular/material/dialog';
import { ToastrService, ToastrModule } from '../../../../node_modules/ngx-toastr';
import { FlightDataService } from '../../shared/flightData.service';

describe('AncillaryPassengerComponent', () => {
  let component: AncillaryPassengerComponent;
  let fixture: ComponentFixture<AncillaryPassengerComponent>;
  let inflightService:FlightDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncillaryPassengerComponent ],
      imports:[HttpClientTestingModule,MatDialogModule,ToastrModule.forRoot()],
      providers:[{provide:MAT_DIALOG_DATA,useValue:{}},{provide:MatDialogRef,useValue:{}},
        {provide: ToastrService, useClass: ToastrService}]
    })
    .compileComponents();
  }));


  
  beforeEach(inject([FlightDataService], (inflight)  => {
    fixture = TestBed.createComponent(AncillaryPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inflightService=inflight;
  }));
 

  it('should on check',()=>{

    let data=[{
      flights:[ ]
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(inflightService,'getFlightById').and.returnValue(of(data));
    component.onCheck(event);
  })

  it('should on change',()=>{

    let data=[{
      flights:[{
        passengers:[]
      }],
      
    }];
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    spyOn(inflightService,'getFlightByName').and.returnValue(of(data));
    let Element=component.resultedPassenger;

    component.onChange(event);


  })

  it('should call ngOnit',()=>{
    let data=[{
      flights:[]
    }];
    spyOn(inflightService,'getflights').and.returnValue(of(data));
    component.ngOnInit();

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
