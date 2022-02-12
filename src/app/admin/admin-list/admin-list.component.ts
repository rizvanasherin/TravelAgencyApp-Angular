import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { PlanService } from 'src/app/shared/plan.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  //declare variable
  page: number = 1;
  filter: string;
  constructor(public planService: PlanService, private authService: AuthService,
    private router: Router) { }  //constructor injection

  ngOnInit(): void {
    //LifeCycle Hook      --initialize
    console.log("Welcome to lifecycle hook");
    this.planService.bindListPlans();
  }

  getPlans() {
    //call service method
    this.planService.getPlans().subscribe(
      response => {
        console.log('Retreiving from list');
        console.log(response);
      },
      error => {
        console.log('Error Occured!');
      }
    );
  }

  //insert plan
  insertTravelPlan() {
    this.router.navigate(['travelplans']);
  }

  //edit plan
  updateTravelPlan(PlanId: number) {
    console.log(PlanId);
    //navigate to edit form with selected plan details
    this.router.navigate(['travelplans', PlanId])
  }


  //delete plan
  DeleteTravelPlan(PlanId: number) {
    if (confirm('Are you sure to DELETE the record ?')) {
      this.planService.DeleteTravelPlan(PlanId).subscribe(
        response => {
          this.planService.bindListPlans();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  //logout
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('signin');
  }

}