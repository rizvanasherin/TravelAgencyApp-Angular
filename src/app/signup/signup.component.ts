import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { PlanService } from '../shared/plan.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(public empService: PlanService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }
  
  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.empService.formData1.UserId;

    //call insert or update method
    if (addId == 0 || addId == null) {
      //call insert
      this.insertUserRecord(form);
    }
    else {
      //call update
      this.updateUserRecord(form);
    }
  }

    //clear all contents after submit  --initialization
    resetForm(form?: NgForm) 
    {
      if (form != null) {
        form.resetForm();
      }
    }

      //insert method
  insertUserRecord(form?: NgForm) {
    console.log("Inserting a record..");
    this.empService.insertUser(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Registered successfully...Login to Continue');
        },
        (error) => {
          console.log(error);
        }
      );
  }

      //update method
  updateUserRecord(form?: NgForm) {
    console.log("Updating a record..");
    this.empService.updateUser(form.value).subscribe
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
    logOut()
    {
      this.authService.logOut();
      this.router.navigateByUrl('signin');
    }

}
