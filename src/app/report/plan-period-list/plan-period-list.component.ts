import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { PlanService } from 'src/app/shared/plan.service';

@Component({
  selector: 'app-plan-period-list',
  templateUrl: './plan-period-list.component.html',
  styleUrls: ['./plan-period-list.component.scss']
})
export class PlanPeriodListComponent implements OnInit {
  loggedUser : string;

  constructor(public planService: PlanService,private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
        //LifeCycle Hook      --initialize
        console.log("Welcome to lifecycle hook");

        this.planService.bindListPlanperiod(); 
  }

  //logout
  logOut()
  {
    this.authService.logOut();
    this.router.navigateByUrl('signin');
  }
  

}