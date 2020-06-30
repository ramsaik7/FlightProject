import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightComponentComponent } from './inflight-component.component';

describe('InflightComponentComponent', () => {
  let component: InflightComponentComponent;
  let fixture: ComponentFixture<InflightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get meal',()=>{
    let event;
    component.getMeal(event);
  })
  it('should get Selected',()=>{
    let event;
    component.getSelected(event);
  })

});
