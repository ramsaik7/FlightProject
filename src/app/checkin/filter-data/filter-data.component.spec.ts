import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { of } from '../../../../node_modules/rxjs';
import { FilterDataComponent } from './filter-data.component';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '../../../../node_modules/@angular/material/dialog';
import { FilterflightsPipe } from '../filterflights.pipe';
import { FlightDataService } from '../../shared/flightData.service';
import { MatTableDataSource } from '../../../../node_modules/@angular/material/table';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { ToastrService, ToastrModule } from '../../../../node_modules/ngx-toastr';

describe('FilterDataComponent', () => {
  let component: FilterDataComponent;
  let fixture: ComponentFixture<FilterDataComponent>;
  let checkInService:FlightDataService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDataComponent,FilterflightsPipe ],
      imports:[HttpClientTestingModule,MatDialogModule,BrowserAnimationsModule,ToastrModule.forRoot()],
      providers:[{provide:MAT_DIALOG_DATA,useValue:{}},{provide:MatDialogRef,useValue:{}},
                  {provide: ToastrService, useClass: ToastrService}]

      
    })
    .compileComponents();
  }));

  beforeEach(inject([FlightDataService], (checkIn)  => {
    fixture = TestBed.createComponent(FilterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    checkInService=checkIn;
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
    spyOn(checkInService,'getFlightById').and.returnValue(of(data));
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
    spyOn(checkInService,'getFlightByName').and.returnValue(of(data));
    let Element=component.resultedPassenger;
    let datasource=new MatTableDataSource<any>(Element);
    component.onChange(event);


  })

  it('should call ngOnit',()=>{
    let data=[{
      flights:[]
    }];
    spyOn(checkInService,'getflights').and.returnValue(of(data));
    component.ngOnInit();

  })

  it('should on click wheel chair',()=>{
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    component.onClickWheelChair(event);
  })


  it('should on click Infant',()=>{
    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    component.onClickInfant(event);
  })


  
  it('should on click checkin',()=>{

    let event:any={
      source:{value:"someVal"},
      checked:true
    };
    component.onClickCheckIn(event);
  })


  it('should open dialog',()=>{

    let data=[{
      passengers:[]
    }]
    let action:string;
    let obj:any={seatNumber:"7A"};
    let dialog:any;
    let dialogRef:any;
    dialogRef=dialog;

   // spyOn(component.dialogRef,'afterClosed').and.returnValue(of(data))
    //spyOn(checkInService,'updatePassengerSeat').and.returnValue(of(data));
    component.openDialog(action,obj);
  })

  
});
