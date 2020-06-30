import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav.service';
import {  animateText, onMainContentChange } from '../../shared/animation/animation';

@Component({
  selector: 'app-check-in-component',
  templateUrl: './check-in-component.component.html',
  styleUrls: ['./check-in-component.component.css'],
  animations: [onMainContentChange ,animateText]
})
export class CheckInComponentComponent implements OnInit {

  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }

  ngOnInit(): void {


  }

}

