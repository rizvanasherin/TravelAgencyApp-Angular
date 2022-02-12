import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanPeriodListComponent } from './report/plan-period-list/plan-period-list.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './shared/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TravelplanComponent } from './travelplans/travelplan/travelplan.component';
import { TravelplansComponent } from './travelplans/travelplans.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'user', component: UsersComponent, canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'report', component: ReportComponent, canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'plan-list', component: PlanListComponent, canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'travelplan', component: TravelplanComponent , canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'travelplan/:PlanId', component: TravelplanComponent , canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'admin-list', component: AdminListComponent , canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'plan-period-list', component: PlanPeriodListComponent , canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'travelplans', component: TravelplansComponent , canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'travelplans/:PlanId', component: TravelplansComponent , canActivate:[AuthGuard],data:{role:'1'}}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
