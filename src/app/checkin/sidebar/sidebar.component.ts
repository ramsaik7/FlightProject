import { Component, OnInit } from '@angular/core';


import { AuthenticationService } from '../../shared/_services';
import { Router } from '@angular/router';
import { SidenavService } from '../../shared/services/sidenav.service';
import { onSideNavChange, animateText } from '../../shared/animation/animation';
interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [onSideNavChange, animateText]
})
export class SidebarComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  // public pages: Page[] = [
  //   {name: 'Paasenger Details',link:'some-link',icon:'tables'},
  //   {name: 'Add/Update Passenger',link:'some-link',icon:'add'},
  //   {name:'Edit Ancillary/Shopping/Special Meal',link:'some-link',icon:'edit'}
  // ]


  constructor(private _sidenavService: SidenavService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }
  //.....................//


}