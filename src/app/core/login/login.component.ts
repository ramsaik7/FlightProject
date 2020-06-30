import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login'
import { AuthenticationService } from '../../shared/_services';

import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';
import { User } from '../../shared/_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

const googleLogoURL = "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css']
},
)
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    social: SocialUser;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    suser: any;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        public authService: AuthService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private toastrService:ToastrService,
     
    ) {
        this.matIconRegistry.addSvgIcon(
            "logo",
            this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));


        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userId: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }




    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.get('userId').value, this.loginForm.get('password').value)
            .pipe(first())
            .subscribe(
                data => {
                    this.toastrService.success('Welcome to flight Service');
                    this.router.navigate(['admin']);
                    // this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                    this.toastrService.error('wrong crendentials Enter');
                });
    }

    // socialUser=new SocialUser(); 
    socialSignIn(socialProvider: string) {

        if (socialProvider == "google") {
            this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {

                this.social = x;
                console.log(this.social);
                this.authenticationService.socialLogin(this.social);
                this.toastrService.success('Welcome Staff to flight Service');
                this.router.navigate([this.returnUrl]);

            });
            // console.log(this.suser);
            //this.router.navigate(['/']);

        }
    }

   

}
