import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { PlanService } from '../shared/plan.service';

@Component({
  selector: 'app-travelplans',
  templateUrl: './travelplans.component.html',
  styleUrls: ['./travelplans.component.scss']
})
export class TravelplansComponent implements OnInit {

  PlanId: number;
  loggedUser: string;

  constructor(public planService: PlanService,
    private route: ActivatedRoute,
    private toastrService: ToastrService, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

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
            this.planService.formData6 = Object.assign({}, result);
          },
          error => {

          }
        );
    }
  }

    //insert plan
    insertPlan() {
      this.router.navigate(['travelplans']);
    }
  
    //submit form
    onSubmit(form: NgForm) {
      console.log(form.value);
      let PlanId = this.planService.formData6.PlanId;
  
      //call insert or update method
      if (PlanId == 0 || PlanId == null) {
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
      this.planService.insertTravelPlan(form.value).subscribe
        (
          (result) => {
            console.log(result);
            //call reset form
            this.resetForm(form);
            this.toastrService.success('New Plan Created successfully');
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
            this.toastrService.success('Plan record has been updated successfully', 'EmpApp v2o22');
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
