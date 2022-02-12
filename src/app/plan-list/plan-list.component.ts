import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from '../shared/plan.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public planService: PlanService,
    private router: Router) { }

  ngOnInit(): void {
    //LifeCycle Hook      --initialize
    console.log("Welcome to lifecycle hook");
    // this.getEmployees();   //1
    this.planService.bindListTravelPlans();
  }


}
