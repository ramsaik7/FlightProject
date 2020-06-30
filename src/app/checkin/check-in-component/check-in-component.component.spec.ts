import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInComponentComponent } from './check-in-component.component';
import { SidenavService } from '../../shared/services/sidenav.service';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

describe('CheckInComponentComponent', () => {
  let component: CheckInComponentComponent;
  let fixture: ComponentFixture<CheckInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckInComponentComponent],
      imports: [BrowserAnimationsModule],
      providers: [SidenavService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
