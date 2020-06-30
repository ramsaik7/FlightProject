import { Component, OnInit, Input } from '@angular/core';
// import { User, Role } from '..//_models';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../_services';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { User, Role } from '../shared/_models';
import { AuthenticationService } from '../shared/_services';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

    @Input() sidenav: MatSidenav


    ngOnInit() {
    }

    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastrService:ToastrService,

    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.toastrService.success('Logout Successfully');
        this.router.navigate(['/login']);
    }

    toggleSideBar() {
        return true;
    }

}
