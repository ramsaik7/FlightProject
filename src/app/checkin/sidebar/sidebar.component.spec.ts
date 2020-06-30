import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { SidenavService } from '../../shared/services/sidenav.service';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { HttpClientTestingModule } from '../../../../node_modules/@angular/common/http/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent],
      imports:[HttpClientTestingModule, RouterTestingModule,BrowserAnimationsModule ],
      providers:[SidenavService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
