import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

// used to create fake backend
import { fakeBackendProvider } from '../shared/_helpers';



import { JwtInterceptor, ErrorInterceptor } from '../shared/_helpers';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { MatButtonModule } from '@angular/material/button';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('3159933440-mg04p2h0e2a8vksifq4va13h6nvodu5a.apps.googleusercontent.com')

  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109')
  },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [ HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    SocialLoginModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),

  ], providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },

    // provider used to create fake backend
    fakeBackendProvider
  ], 
})
export class CoreModule { }
