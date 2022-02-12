import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { PlanService } from 'src/app/shared/plan.service';

@Component({
  selector: 'app-travelplan',
  templateUrl: './travelplan.component.html',
  styleUrls: ['./travelplan.component.scss']
})
export class TravelplanComponent implements OnInit {
  PlanId: number;
  loggedUser: string;

  constructor(public planService: PlanService,
    private route: ActivatedRoute,
    private toastrService: ToastrService, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void 
  {
    //get departments
    this.planService.bindListDestinations();
    this.planService.bindListPeriods();
    this.planService.bindListPlanTypes();
    this.planService.bindListTransportations();

    //get empId from ActivateRoute
    this.PlanId = this.route.snapshot.params['PlanId'];

    //get employee by id
    if (this.PlanId != 0 || this.PlanId != null) {
      //get employee
      this.planService.getPlanById(this.PlanId).subscribe
        (
          result => {
            console.log(result);
            //assign this result to empService formData
            this.planService.formData = Object.assign({}, result);
          },
          error => {

          }
        );
    }
  }
  //insert olan
  insertPlan() {
    this.router.navigate(['travelplan']);
  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.planService.formData.PlanId;

    //call insert or update method
    if (addId == 0 || addId == null) {
      //call insert
      this.insertTravelRecord(form);
    }
    else {
      //call update
      this.updateTravelRecord(form);
    }
  }

  //clear all contents after submit  --initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert method
  insertTravelRecord(form?: NgForm) {
    console.log("Inserting a record..");
    this.planService.insertPlan(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Custom Plan Created successfully', 'We will Contact you soon with all the Details');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //update method
  updateTravelRecord(form?: NgForm) {
    console.log("Updating a record..");
    this.planService.updateTravelPlan(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Client record has been updated successfully', 'EmpApp v2o22');
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //logout
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('signin');
  }


}
