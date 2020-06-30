import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from '../shared/_helpers/auth.guard';
import { AdminComponent } from '../admin/admin/admin.component';
import { Role } from '../shared/_models/role';
import { LoginComponent } from './login';
import { CheckInComponentComponent } from '../checkin/check-in-component/check-in-component.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,//homecompo
    canActivate: [AuthGuard]
  },
  {
    path: 'checkin',
    loadChildren: () => import('../checkin/checkin.module').then(m => m.CheckinModule),

  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    // component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'inflight',
    loadChildren: () => import('../inflight/inflight.module').then(m => m.InflightModule),

  },

  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
