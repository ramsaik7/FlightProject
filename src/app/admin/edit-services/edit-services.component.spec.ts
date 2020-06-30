import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicesComponent } from './edit-services.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../node_modules/@angular/material/dialog';

describe('EditServicesComponent', () => {
  let component: EditServicesComponent;
  let fixture: ComponentFixture<EditServicesComponent>;
  
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServicesComponent ],
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
    fixture = TestBed.createComponent(EditServicesComponent);
    component = fixture.componentInstance;
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
