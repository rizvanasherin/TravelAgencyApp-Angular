import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { TravelplansComponent } from './travelplans/travelplans.component';
import { TravelplanComponent } from './travelplans/travelplan/travelplan.component';
import { PlanPeriodListComponent } from './report/plan-period-list/plan-period-list.component';
import { PlanService } from './shared/plan.service';
import { AuthGuard } from './shared/auth.guard';
import {AuthInterceptor } from './shared/auth.interceptor';
import { AdminListComponent } from './admin/admin-list/admin-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ReportComponent,
    PlanListComponent,
    AdminComponent,
    UsersComponent,
    TravelplansComponent,
    TravelplanComponent,
    PlanPeriodListComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PlanService,AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
