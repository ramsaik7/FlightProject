import { Component, OnInit } from '@angular/core';


import { SidenavService } from '../../shared/services/sidenav.service';
import { onMainContentChange } from '../../shared/animation/animation';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [ onMainContentChange ]
})
export class AdminComponent implements OnInit {
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
