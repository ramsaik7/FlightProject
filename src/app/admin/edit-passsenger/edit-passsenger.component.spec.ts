import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasssengerComponent } from './edit-passsenger.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '../../../../node_modules/@angular/material/dialog';

describe('EditPasssengerComponent', () => {
  let component: EditPasssengerComponent;
  let fixture: ComponentFixture<EditPasssengerComponent>;

  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPasssengerComponent ],
      imports:[MatDialogModule],
      providers:[{
        provide: MAT_DIALOG_DATA, useValue:{}
      },{
        provide: MatDialogRef,
        useValue: dialogMock
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasssengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should do action",()=>{
  //   let data:any={};
  //   // component.dialogRef.close;
  
  // })

  // it("should close action",()=>{
  //   let data:any={};
  //   // component.dialogRef.close;
  //   component.closeDialog();
  // })


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
