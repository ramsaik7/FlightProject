import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { SidenavService } from './shared/services/sidenav.service';
import { InflightModule } from './inflight/inflight.module';
import { HeaderComponent } from './header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    CoreModule,
    AdminModule,
    InflightModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],

  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
